const mongoose = require('mongoose');
const { genAllData } = require('./dataGen');

mongoose.connect('mongodb://localhost/recommendations');

const recSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  photo_url: String,
});

const listingSchema = new mongoose.Schema({
  listing_id: Number,
  listing_title: String,
  recommendations: [recSchema],
});

const Recommendations = mongoose.model('recommendation', listingSchema);

const seedDB = (data) => {
  const promise = Recommendations.create(data);
  promise.then(() => {
    console.log('Data has been entered into database');
  });
};

const find = (listing, callback) => {
  Recommendations.find((err, recommendation) => {
    if (err) {
      console.log(err);
    } else {
      callback(recommendation);
    }
  }).where('listing_id').equals(listing);
};

seedDB(genAllData(200));
exports.seedDB = seedDB;
exports.find = find;
exports.Recommendations = Recommendations;
