const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  make: String,
  model: String,
  seats: String,
  doors: String,
  type: String,
  daily: String,
  description: String,
  specifications: {
    gearBox: String, // This field represents the gearbox type of the vehicle (e.g., automatic, manual).
    fuelType: String, // This field represents the type of fuel the vehicle uses (e.g., petrol, diesel, electric).
    aircon: Boolean, // This field indicates whether the vehicle has air conditioning or not.
  },
  deposit: String,
  photo: [String],
  pickup: String,
  dropOff: String,
});

const CarModel = mongoose.model('Car', carSchema);

module.exports = CarModel;
