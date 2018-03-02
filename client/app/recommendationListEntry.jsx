import React from 'react';
import styles from './recommendationListEntry.css';

const RecommendationListEntry = ({ row }) => (
  <div className={styles.divTableRow}>{row.map((item) => (
    <div className={styles.divCell}>
    <img class={styles.img} src={item.photo_url} alt="Recommended Places"></img>
    <div>{item.title}</div>
    <div>{item.description}</div>
    <div>{item.price}</div>
    </div>))}
    </div>
    )

exports.RecommendationListEntry = RecommendationListEntry;
