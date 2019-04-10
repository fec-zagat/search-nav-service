const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dbMethods = require('./db/dbMethods.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;

app.use('/r/:restaurant', express.static('public'));

app.get('/search/r/:query', (req, res) => {
  mongoose.connect(`mongodb://tlindow:${process.env.dbpassword}@${process.env.devDB}`, { useNewUrlParser: true }, () => {
    dbMethods.getByQuery(req.params.query, (err, restaurants) => {
      if (err) {
        throw (err);
      }
      mongoose.disconnect(() => {
        res.send(restaurants);
      });
    });
  });
});

app.get('/', (req, res) => {
  res.redirect('/r/eoss-oharahaven/');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!`);
});

module.exports = app;
