import React from 'react';
import { RecommendationListEntry } from './recommendationListEntry.jsx';

const RecommendationList = ({ recs }) => {
  const recs1 = recs.slice(0, 4);
  const recs2 = recs.slice(4, 8);
  const recs3 = recs.slice(8, 12);
  return (
    <div>
      <div>{recs1.map(item => <RecommendationListEntry rec={item} />)}</div>
      <div>{recs2.map(item => <RecommendationListEntry rec={item} />)}</div>
      <div>{recs3.map(item => <RecommendationListEntry rec={item} />)}</div>
    </div>);
};

exports.RecommendationList = RecommendationList;
