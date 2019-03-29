const mongoose = require('mongoose');
const generatedData = require('./generateData.js');
const config = require('../config/config.js');

mongoose.connect(`mongodb://tlindow:${config.dbpassword}@ds143604.mlab.com:43604/search-nav-service`);
const db = mongoose.connection;

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

Restaurant.deleteMany({}, (err) => {
  if (err) {
    throw err;
  }
});

Restaurant.insertMany(generatedData, (err) => {
  if (err) {
    throw err;
  }
  db.close();
});
