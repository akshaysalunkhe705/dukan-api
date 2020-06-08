const mongoose = require("mongoose");

const orderListSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer_id: { type: String, required: true },
  shopkeeper_id: { type: String, required: true },
  image1: { type: String },
  image2: { type: String },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('orderlist', orderListSchema);