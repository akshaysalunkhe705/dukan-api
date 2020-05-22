const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contact_no1: { type: Number, required: true, min:10 },
    contact_no2: { type: Number, min:10 },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    area: { type: String, required: true },
    address: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('customer', CustomerSchema);