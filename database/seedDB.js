const mongoose = require('mongoose');
const { genAllData, Recommendations } = require('./dataGen');

mongoose.connect('mongodb://localhost/recommendations');

const seedDB = (data) => {
  const promise = Recommendations.create(data);
  promise.then(() => {
    console.log('Data has been entered into database');
  });
};


seedDB(genAllData(200));

exports.seedDB = seedDB;

