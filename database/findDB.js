const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recommendations');

const find = (listing, callback) => {
  Recommendations.find((err, recommendation) => {
    if (err) {
      console.log(err);
    } else {
      callback(recommendation);
    }
  }).where('listing_id').equals(listing);
};


exports.find = find;
