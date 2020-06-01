const mongoose = require("mongoose");

const ShopkeeperSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category_id: mongoose.Schema.Types.ObjectId,
    shop_name: { type: String, required: true, min:6 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contact_no1: { type: Number, required: true, min:10 },
    contact_no2: { type: Number, min:10 },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    area: { type: String, required: true },
    address: { type: String, required: true },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('shopkeeper', ShopkeeperSchema);