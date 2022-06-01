import { MutableRefObject, useEffect } from 'react';

type useObserverType<T> = {
  target: MutableRefObject<T>;
  onIntersect: IntersectionObserverCallback;
  root?: null;
  rootMargin?: string;
  threshold?: number;
};

export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = '150px',
  threshold = 1.0,
}: useObserverType<Element | null>) => {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current as Element);
    }

    return () => observer && observer.disconnect();
  }, [target, root, rootMargin, threshold]);
};
