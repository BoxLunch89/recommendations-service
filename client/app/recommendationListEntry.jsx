import React from 'react';
import styles from './recommendationListEntry.css';

const RecommendationListEntry = ({ row }) => (
  <div className={styles.divRow}>{row.map(item => (
    <div className={styles.divCell}>
      <img className={styles.img} src={item.photo_url} alt="Recommended Places" />
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
    </div>))}
  </div>
);

exports.RecommendationListEntry = RecommendationListEntry;
