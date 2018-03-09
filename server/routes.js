const express = require('express');
const { Recommendations } = require('../database/dataGen');
const mongoose = require('mongoose');

mongoose.connect('mongodb://database/recommendations');

const router = express.Router();

router.get('/:listing_id/recommendations', (req, res) => {
  const id = req.params.listing_id;
  Recommendations.find({ listing_id: id })
    .exec((err, data) => {
      res.send(data);
    });
});

exports.router = router;
