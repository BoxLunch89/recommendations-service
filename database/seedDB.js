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

const recommendation = mongoose.model('recommendation', listingSchema);

const seedDB = (data) => {
  const promise = recommendation.create(data);
  promise.then(() => {
    console.log('Data has been entered into database');
  });
};

exports.seedDB = seedDB;
