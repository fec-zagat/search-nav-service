const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbMethods = require('./db/dbMethods.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

app.use(express.static('public'));

app.get('/r', (req, res) => {
  mongoose.connect(`mongodb://tlindow:${process.env.dbpassword}@${process.env.devDB}`, { useNewUrlParser: true }, () => {
    dbMethods.getAll((err, restaurants) => {
      if (err) {
        throw (err);
      }
      mongoose.disconnect(() => {
        res.send(restaurants);
      });
    });
  });
});


app.listen(port);

module.exports = app;
