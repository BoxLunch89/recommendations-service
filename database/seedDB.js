const mongoose = require('mongoose');
const { genAllData, Recommendations } = require('./dataGen');

mongoose.connect('mongodb://database/recommendations');

const seedDB = (data) => {
  const promise = Recommendations.create(data);
  promise.then(() => {
    console.log('Data has been entered into database');
    process.exit();
  });
};


seedDB(genAllData(200));
exports.seedDB = seedDB;

