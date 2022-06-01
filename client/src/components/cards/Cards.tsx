import React, { useEffect, useRef, useState } from 'react';
import CardLoading from 'components/cards/CardLoading';
import CardList from './CardList';
import { fetchCards } from 'apis/card';
import { CardItem } from 'interfaces/card';

function Cards() {
  const [page, setPage] = useState(0);
  const [list, setList] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const cards = await fetchCards();
      setList((prev) => [...prev, ...cards]);
      setLoading(false);
    };
    fetch();
  }, [page]);

  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <CardList list={list} loading={loading} page={page} />
      <button onClick={onClick}>fetch!</button>
    </>
  );
}

export default Cards;
