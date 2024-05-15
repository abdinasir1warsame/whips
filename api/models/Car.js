const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  make: String,
  model: String,
  seats: String,
  bodyType: String,
  dailyPrice: String,
  Description: String,
  gearBox: String,
  fuelType: String,
  airCon: Boolean,
  Deposit: String,
  Photo: String,
  pickUp: Number,
  dropOff: Number,
});

const CarModel = mongoose.model('Car', carSchema);

module.exports = CarModel;
