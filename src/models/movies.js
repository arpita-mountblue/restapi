const mongoose = require("mongoose");
const validator = require("validator");

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100,
  },
  Director: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Actors: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  Language: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Rating: {
    type: Number,
    required: true,
    min: 1,
    max: 9.99,
  },
  Year: {
    type: Number,
    required: true,
    min: 1947,
    max: 2022,
  },
});

const movie = new mongoose.model("movie", movieSchema);

module.exports = movie;
