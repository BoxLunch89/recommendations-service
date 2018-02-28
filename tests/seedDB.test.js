const React = require('react');
const { seedDB, Recommendations } = require('../database/seedDB');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recommendations');

describe('Seeding database', () => {
  test('Check database has 200 items in Recommendations collection', () => {
    Recommendations.find((err, recs) => {
      if (err) {
        console.log(err);
      }
      expect(recs.length).toEqual(200);
    });
  });
});

