import { CardItem } from 'interfaces/card';
import React from 'react';
import Card from './CardItem';
import CardLoading from './CardLoading';

interface CarListProps {
  list: CardItem[];
  loading: boolean;
  page: number;
}

const CardList = ({ list, loading, page }: CarListProps) => {
  console.log(loading);
  return (
    <>
      {list.map((card, i) => (
        <>
          {console.log('page : ', page)}
          {page === 0 && loading ? (
            <CardLoading key={i} />
          ) : (
            <>
              <Card key={card.id} title={card.User.name} />
            </>
          )}
        </>
      ))}
    </>
  );
};
export default CardList;
