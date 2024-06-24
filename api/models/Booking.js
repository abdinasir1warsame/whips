const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'Car' },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'User' },
  carOwner: { type: String, required: true },
  pickUp: { type: Date, required: true },
  dropOff: { type: Date, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  price: Number,
});

const BookingModel = mongoose.model('booking', bookingSchema);

module.exports = BookingModel;
