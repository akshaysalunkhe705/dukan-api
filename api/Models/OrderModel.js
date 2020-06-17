const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // order_id: {
  //   type: Number,
  //   default: Math.floor(Math.random()*900000000000) + 999999999999,
  //   index: { unique: true },
  // },
  order_id: { type: Number, required: true,index: { unique: true } },
  customer_id: { type: String, required: true },
  shopkeeper_id: { type: String, required: true },
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
