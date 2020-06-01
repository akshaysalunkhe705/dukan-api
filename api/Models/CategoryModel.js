const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category_name: { Types: String },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('category', categorySchema);