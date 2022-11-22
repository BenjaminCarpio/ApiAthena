const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  stars: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true

  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);