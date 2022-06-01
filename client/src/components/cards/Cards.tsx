import React, { useEffect, useRef } from 'react';
import CardLoading from 'components/cards/CardLoading';
import { fetchCards } from 'apis/card';
import useLocalStorage from 'use-local-storage';
import { useInfiniteQuery } from 'react-query';
import { useObserver } from 'hooks/useObserver';
import Card from './Card';
import { CardItem } from 'interfaces/card';

function Cards() {
  const bottom = useRef(null);
  const [scrollY] = useLocalStorage('sonus_list_scroll', 0);
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
    'infiniteCards',
    fetchCards,
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return false;
      },
    }
  );

  const onIntersect: IntersectionObserverCallback = ([entry]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  console.log(data);

  return (
    <>
      {status === 'success' && (
        <div>
          {data.pages.map((page, index) => (
            <div key={index}>
              {page.map((card: CardItem) => {
                const { id, title } = card;
                return <Card key={id} title={title} />;
              })}
            </div>
          ))}
        </div>
      )}
      <div ref={bottom} />

      {isFetchingNextPage && data && (
        <div>
          {data.pages[data?.pages.length - 1].map(
            (page: unknown, index: React.Key | null | undefined) => (
              <CardLoading key={index} />
            )
          )}
        </div>
      )}
    </>
  );
}

export default Cards;
