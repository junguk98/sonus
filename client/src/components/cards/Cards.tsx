import React, { useCallback, useEffect, useRef } from 'react';
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
      staleTime: 60 * 1000,
      getNextPageParam: (lastPage) => lastPage.next,
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

  const printLoading = useCallback(() => {
    const loading = [];
    for (let i = 0; i < 30; i++) {
      loading.push(<CardLoading key={i} />);
    }
    return loading;
  }, []);

  console.log(data);

  return (
    <>
      {status === 'loading' && printLoading()}
      {status === 'error' && <p>에러..</p>}

      {status === 'success' && (
        <div>
          {data.pages.map((page, index) => (
            <div key={index}>
              {console.log(page)}
              {page.results.map((card: CardItem) => {
                const { id, title, albumImgUrl, user, plays, likes, comments } =
                  card;
                return (
                  <Card
                    key={id}
                    title={title}
                    albumImgUrl={albumImgUrl}
                    user={user}
                    plays={plays}
                    likes={likes}
                    comments={comments}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
      <div ref={bottom} />

      {isFetchingNextPage && printLoading()}
    </>
  );
}

export default Cards;
