require('dotenv').config();
const mongoose = require('mongoose');
const dbMethods = require('../db/dbMethods.js');

describe('should seed a database with generatedData', () => {
  test('mongo database should have 100 docs', (done) => {
    mongoose.connect(`mongodb://tlindow:${process.env.dbpassword}@${process.env.testDB}`, { useNewUrlParser: true }, () => {
      dbMethods.seedDB(() => {
        dbMethods.getAll((err, docs) => {
          if (err) {
            throw err;
          }
          expect(docs.length).toBe(100);
          mongoose.disconnect();
          done();
        });
      });
    });
  });
});
