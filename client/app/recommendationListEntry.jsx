import React from 'react';

const RecommendationListEntry = ({ rec }) => (
  <div className="entry">
    <img src={rec.photo_url} alt="Recommended Places"></img>
    <div>{rec.title}</div>
    <div>{rec.description}</div>
    <div>{rec.price}</div>
  </div>
);

exports.RecommendationListEntry = RecommendationListEntry;
