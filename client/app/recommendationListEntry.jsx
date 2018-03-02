import React from 'react';
import styles from './recommendationListEntry.css';

const RecommendationListEntry = ({ row }) => (
  <div className={styles.divRow}>{row.map(item => (
    <div className={styles.divCell}>
      <img className={styles.img} src={item.photo_url} alt="Recommended Places" />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.price}>{item.price}</div>
    </div>))}
  </div>
);

exports.RecommendationListEntry = RecommendationListEntry;
