import React from 'react';
import { RecommendationListEntry } from './recommendationListEntry';
import { recommendationTable } from './recommendationList.css';

const RecommendationList = ({ recs }) => {
  const recRows = [recs.slice(0, 4), recs.slice(4, 8), recs.slice(8, 12)];
  return (
    <div className={recommendationTable}>
      {recRows.map(row => <RecommendationListEntry row={row} />)}
    </div>);
};

exports.RecommendationList = RecommendationList;
