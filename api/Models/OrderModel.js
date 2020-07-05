const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  shopkeeper_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  order_id: { type: Number, required: true },
  image1Url: { type: String },
  image2Url: { type: String },
  contact_no1: { type: Number },
  contact_no2: { type: Number },
  state: { type: String },
  city: { type: String },
  pincode: { type: String },
  area: { type: String },
  address: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("order", orderSchema);
