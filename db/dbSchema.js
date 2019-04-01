const mongoose = require('mongoose');

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

module.exports = { Restaurant };
