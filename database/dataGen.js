const faker = require('faker');
const mongoose = require('mongoose');
const fakerURL = faker.image.imageUrl();
const randomPhoto = 'http://lorempixel.com/400/200';
const randomPhoto2 = 'https://source.unsplash.com/random/400x200';
const photoURLs = [
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/3306/SITours/san-francisco-golden-gate-bridge-to-sausalito-bike-tour-in-san-francisco-516113.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/5713/SITours/san-francisco-coastal-walking-tour-from-the-golden-gate-bridge-to-in-san-francisco-546039.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/42490/SITours/guided-bike-tour-across-the-golden-gate-bridge-in-san-francisco-384667.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2630/SITours/golden-gate-bay-cruise-in-san-francisco-36718.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/napa-and-sonoma-wine-country-tour-in-san-francisco-39462.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/muir-woods-giant-redwoods-and-sausalito-half-day-trip-in-san-francisco-117268.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2630/SITours/san-francisco-bridge-to-bridge-cruise-in-san-francisco-131321.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/5096/SITours/big-bus-san-francisco-hop-on-hop-off-tour-in-san-francisco-435318.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2630/SITours/jail-and-sail-alcatraz-tour-and-twilight-bay-cruise-in-san-francisco-117165.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/alcatraz-and-san-francisco-city-tour-combo-in-san-francisco-131323.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/36001/SITours/yosemite-in-a-day-tour-from-san-francisco-in-san-francisco-330024.jpg',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6954/SITours/san-francisco-hop-on-hop-off-tour-in-san-francisco-174075.jpg',
];
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
      photo_url: photoURLs[Math.floor(Math.random() * photoURLs.length)],
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
