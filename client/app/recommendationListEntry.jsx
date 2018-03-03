import React from 'react';
import styles from './recommendationListEntry.css';

const RecommendationListEntry = ({ row }) => {

  return (
    <div className={styles.divRow}>{row.map(item => (
      <div className={styles.divCell}>
        <img className={styles.img} src={item.photo_url} alt="Recommended Places" />
        <div className={styles.ribbon}>
          <div className={styles.price}>{`from $${item.price} *`}</div>
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>{item.description}</div><a href="google.com">... read more</a>
        
      </div>))}
    </div>);
};

exports.RecommendationListEntry = RecommendationListEntry;
