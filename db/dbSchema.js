const mongoose = require('mongoose');
const config = require('../config/config.js');

const db = mongoose.connect(`mongodb://tlindow:${config.dbpassword}@${config.devDB}`);

const restaurantSchema = mongoose.Schema({
  name: String,
  address: {
    district: String,
    zipCode: String,
    city: String,
    street: String,
  },
  cuisine: String,
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant, db };
