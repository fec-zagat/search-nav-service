const { Restaurant } = require('./dbSchema.js');
const generatedData = require('./generateData.js');

module.exports = {
  deleteAll: callback => Restaurant.deleteMany({}, (err) => {
    if (err) {
      callback(err);
    }
    callback();
  }),

  insertAll: callback => Restaurant.insertMany(generatedData, (err) => {
    if (err) {
      callback(err);
    }
    callback();
  }),

  seedDB: (callback) => {
    module.exports.deleteAll(() => {
      module.exports.insertAll(() => {
        callback();
      });
    });
  },

  getAll: (callback) => {
    Restaurant.find({}, (err, docs) => {
      if (err) {
        callback(err);
      }
      callback(null, docs);
    });
  },

  getByQuery: (query, callback) => {
    Restaurant.find({ name: new RegExp(`^${query}`, 'i') }, (err, docs) => {
      if (err) {
        callback(err);
      }
      callback(null, docs);
    }).limit(2);
  },
};
