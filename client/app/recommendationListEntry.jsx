import React from 'react';
import styles from './recommendationListEntry.css';

const RecommendationListEntry = ({ rec }) => (
  <div className="entry">
    <img class={styles.img} src={rec.photo_url} alt="Recommended Places"></img>
    <div>{rec.title}</div>
    <div>{rec.description}</div>
    <div>{rec.price}</div>
  </div>
);

exports.RecommendationListEntry = RecommendationListEntry;
