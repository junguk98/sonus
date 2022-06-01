import React from 'react';
import 'styles/card-loading.scss';

function Card({ title }) {
  return (
    <div className="card">
      <div className="thumnail">{title}</div>
      <div className="title"></div>
      <div className="contents"></div>
    </div>
  );
}

export default Card;
