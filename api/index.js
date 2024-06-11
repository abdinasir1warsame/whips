const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Car = require('./models/Car');
const Booking = require('./models/Booking');

const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = 'asdhasjdasoldkd';
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

mongoose.connect(process.env.MONGO_URL);

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json({ userDoc });
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(userDoc);
        }
      );
    } else {
      res.json('password not ok');
    }
  } else {
    res.status(422).json('user not found');
  }
});

app.get('/profile', (req, res) => {
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
  res.cookie('token', '').json(true);
});

app.post('/upload-by-link', async (req, res) => {
  const { link } = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url: link,
    dest: __dirname + '/uploads/' + newName,
  });
  res.json(newName);
});

const photosMiddleware = multer({ dest: 'uploads' });
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;

    fs.renameSync(path, newPath);

    uploadedFiles.push(newPath.replace('uploads\\', ''));
  }
  res.json(uploadedFiles);
});

app.post('/cars', (req, res) => {
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
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      const { id } = userData;
      res.json(await Car.find({ owner: id }));
    });
  }
});
app.get('/cars/:id', async (req, res) => {
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
  res.json(await Car.find());
});
app.post('/bookings', async (req, res) => {
  const { car, pickUp, dropOff, name, phone, email, price } = req.body;
  const bookingDoc = await Booking.create({
    car,
    pickUp,
    dropOff,
    name,
    email,
    phone,
    price,
  });
  res.json(bookingDoc);
});

app.listen(4000);
