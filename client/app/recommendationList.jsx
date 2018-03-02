import React from 'react';
import { RecommendationListEntry } from './recommendationListEntry.jsx';

const RecommendationList = ({ recs }) => {
  return (
    <div>
      {recs.map(item => <RecommendationListEntry rec={item} />)}
    </div>);
};

exports.RecommendationList = RecommendationList;
