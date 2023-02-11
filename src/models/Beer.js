const mongoose = require("mongoose");

const Beer = mongoose.model("Beer",{
  name: String,
  abv: Number,
  ibu: Number,
  category: String,
  description: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  coordinates: Array,
});
module.exports = Beer;
