require('dotenv').config();
const mongoose = require('mongoose');
const dbMethods = require('./dbMethods.js');

mongoose.connect(`mongodb://tlindow:${process.env.dbpassword}@${process.env.devDB}`, { useNewUrlParser: true }, () => {
  dbMethods.seedDB(() => {
    // eslint-disable-next-line no-console
    console.log('data base seeded');
    mongoose.disconnect();
  });
});
