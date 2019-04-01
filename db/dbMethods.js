const { Restaurant } = require('./dbSchema.js');
const generatedData = require('./generateData.js');

module.exports = {
  deleteAll: callback => Restaurant.deleteMany({}, (err) => {
    if (err) {
      throw err;
    }
    callback();
  }),

  insertAll: callback => Restaurant.insertMany(generatedData, (err) => {
    if (err) {
      throw err;
    }
    callback();
  }),

  getAll: (callback) => {
    Restaurant.find({}, (err, docs) => {
      if (err) {
        callback(err);
      }
      callback(null, docs);
    });
  },
};
