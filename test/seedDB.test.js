const mongoose = require('mongoose');
const config = require('../config/config.js');
const dbMethods = require('../db/dbMethods.js');
const seed = require('../db/seedDB.js');

describe('should seed a database with generatedData', () => {
  test('mongo database should have 100 docs', (done) => {
    mongoose.connect(`mongodb://tlindow:${config.dbpassword}@${config.testDB}`, { useNewUrlParser: true }, () => {
      seed(() => {
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
