const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  id: Number,
  name: String,
  address: {
    district: String,
    zipCode: String,
    city: String,
    street: String,
  },
  cuisine: String,
  image_url: String,
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant };
