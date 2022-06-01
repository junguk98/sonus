import React from 'react';
import 'styles/card-loading.scss';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      <div className="thumnail"></div>
      <div className="title">{title}</div>
      <div className="contents"></div>
    </div>
  );
};

export default Card;
