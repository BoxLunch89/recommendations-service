const faker = require('faker');
const mongoose = require('mongoose');
const fakerURL = faker.image.imageUrl();
const randomPhoto = 'http://lorempixel.com/400/200';
const randomPhoto2 = 'https://source.unsplash.com/random/400x200';
const recSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  photo_url: String,
});

const listingSchema = new mongoose.Schema({
  listing_id: { type: Number, unique: true },
  listing_title: String,
  recommendations: [recSchema],
});

const Recommendations = mongoose.model('recommendation', listingSchema);

const genRecommendation = (amount) => {
  const recommendations = [];
  for (let i = 0; i < amount; i += 1) {
    const recommendation = {
      title: faker.address.city(),
      description: faker.lorem.sentences(),
      price: faker.commerce.price(),
      photo_url: randomPhoto2,
    };
    recommendations.push(recommendation);
  }
  return recommendations;
};

const genOneData = (id) => {
  const recommendation = {
    listing_id: id,
    listing_title: faker.address.city(),
    recommendations: genRecommendation(12),
  };
  return recommendation;
};

const genAllData = (count) => {
  const aggregateData = [];
  for (let i = 0; i < count; i += 1) {
    aggregateData.push(genOneData(i));
  }
  return aggregateData;
};

exports.genAllData = genAllData;
exports.Recommendations = Recommendations;
