import React from 'react';
import { divRow, card, divCell, img, ribbon, price, title, description } from './recommendationListEntry.css';

const RecommendationListEntry = ({ row }) => (
  <div className={divRow}>{row.map(item => (
    <div className={card}>
      <div className={divCell}>
        <img className={img} src={item.photo_url} alt="Recommended Places" />
        <div className={ribbon}>
          <div className={price}>{`from $${item.price} *`}</div>
        </div>
        <div className={title}>{item.title}</div>
        <div className={description}>{item.description}</div><a href="google.com">... read more</a>
      </div>
    </div>))}
  </div>
);

exports.RecommendationListEntry = RecommendationListEntry;
