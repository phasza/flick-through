import { useEffect, useState } from 'react';

const scrollMaxValue = (): number => {
  const body = document.body;
  const html = document.documentElement;

  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const windowHeight = window.innerHeight;

  return documentHeight - windowHeight;
};

const useInfiniteScroll = (
  isLoading: boolean,
  hasMore: boolean,
  next: () => void,
  loadFactor: number = 0.8
): void => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (): void => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoading || !hasMore) {
      return;
    }

    if (scrollPosition >= scrollMaxValue() * loadFactor) {
      next();
    }
  }, [scrollPosition, isLoading, hasMore]);
};

export default useInfiniteScroll;
