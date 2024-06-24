const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Car = require('./models/Car');
const Booking = require('./models/Booking');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const mime = require('mime-types');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = 'asdhasjdasoldkd';
const bucket = 'whips-booking-app';
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

async function uploadToS3(path, originalFilename, mimetype) {
  const client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });
  const parts = originalFilename.split('.');
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + '.' + ext;
  const data = await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Body: fs.readFileSync(path),
      Key: newFilename,
      ContentType: mimetype,
      ACL: 'public-read',
    })
  );
  return `https://${bucket}.s3.amazonaws.com/${newFilename}`;
}

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.post('/signup', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { name, email, password } = req.body;

  try {
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'User with this email already exists.' });
    }

    // Create new user
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ user: userDoc });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: 'Registration failed, please try again later.' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  mongoose.connect(process.env.MONGO_URL);
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

app.post('/login', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(422).json({ message: 'User not found.' });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (!passOk) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    jwt.sign(
      { email: userDoc.email, id: userDoc._id },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      }
    );
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Login failed, please try again later.' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  mongoose.connect(process.env.MONGO_URL);
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

app.get('/profile', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});
app.post('/logout', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.cookie('token', '').json(true);
});

app.post('/upload-by-link', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { link } = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url: link,
    dest: '/tmp/' + newName,
  });
  const url = await uploadToS3(
    '/tmp/' + newName,
    newName,
    mime.lookup('/tmp/')
  );
  res.json(url);
});
const photosMiddleware = multer({ dest: '/tmp' });
app.post('/upload', photosMiddleware.array('photos', 100), async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname, mimetype } = req.files[i];
    const url = await uploadToS3(path, originalname, mimetype);
    uploadedFiles.push(url);
  }
  res.json(uploadedFiles);
});

app.post('/cars', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  const {
    model,
    doors,
    make,
    seats,
    type,
    daily,
    deposit,
    photo,
    specifications,
    pickup,
    dropoff,
    aircon,
  } = req.body;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;

      const carDoc = await Car.create({
        owner: [userData.id],
        model,
        make,
        seats,
        doors,
        type,
        daily,
        deposit,
        photo,
        specifications,
        pickup,
        dropoff,
        aircon,
      });
      res.json(carDoc);
    });
  }
});

app.get('/user-cars', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      const { id } = userData;
      res.json(await Car.find({ owner: id }));
    });
  }
});
app.get('/cars/:id', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { id } = req.params;

  try {
    const carDoc = await Car.findById(id);
    if (!carDoc) {
      return res.status(404).json({ message: 'Car not found' });
    }

    const userDoc = await User.findById(carDoc.owner);
    if (!userDoc) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    res.json({
      ...carDoc.toObject(),
      owner: {
        name: userDoc.name,
        email: userDoc.email,
      },
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: e.message });
  }
});

app.put('/cars', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  const {
    id,
    model,
    doors,
    make,
    seats,
    type,
    daily,
    deposit,
    photo,
    specifications,
    pickup,
    dropoff,
    aircon,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const carDoc = await Car.findById(id);
    if (userData.id === carDoc.owner.toString()) {
      carDoc.set({
        model,
        make,
        seats,
        doors,
        type,
        daily,
        deposit,
        photo,
        specifications,
        pickup,
        dropoff,
        aircon,
      });
      await carDoc.save();
      res.json('ok');
    }
  });
});
app.get('/cars', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.json(await Car.find());
});
app.post('/bookings', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  const { carOwner, car, pickUp, dropOff, name, phone, email, price } =
    req.body;
  const bookingDoc = await Booking.create({
    car,
    pickUp,
    dropOff,
    name,
    email,
    phone,
    price,
    carOwner,
    user: userData.id,
  });
  res.json(bookingDoc);
});

app.get('/bookings', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  res.json(await Booking.find({ user: userData.id }).populate('car'));
});

app.listen(4000);
