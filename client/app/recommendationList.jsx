import React from 'react';
import { RecommendationListEntry } from './recommendationListEntry.jsx';
import styles from './recommendationList.css';

const RecommendationList = ({ recs }) => {
  const recRows = [recs.slice(0, 4), recs.slice(4, 8), recs.slice(8, 12)];
  return (
    <div className={styles.divTable}>
      {recRows.map(row => <RecommendationListEntry row={row} />)}
    </div>);
};

exports.RecommendationList = RecommendationList;
