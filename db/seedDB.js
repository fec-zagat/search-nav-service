const dbMethods = require('./dbMethods.js');

const seed = (callback) => {
  dbMethods.deleteAll(() => {
    dbMethods.insertAll(() => {
      callback();
    });
  });
};

module.exports = seed;
