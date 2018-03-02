const express = require('express');
const { Recommendations } = require('../database/seedDB');

const router = express.Router();

router.get('/test', (req, res) => {
  res.end('hey');
});

router.get('/:listing_id/recommendations', (req, res) => {
  const id = req.params.listing_id;
  Recommendations.find({ listing_id: id })
    .exec((err, data) => {
      res.send(data);
    });
});

exports.router = router;
