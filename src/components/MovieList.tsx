import React, { type ReactElement, useEffect, useState } from 'react';

import {
  type MultiResultType,
  getUniqueId,
  instanceOfMovie,
} from '../api/tmdbResponse';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: MultiResultType[];
  next: () => void;
  hasMore: boolean;
  isLoading: boolean;
  error: unknown | null;
}

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

const MovieList = ({
  movies,
  next,
  hasMore,
  isLoading,
  error,
}: MovieListProps): ReactElement => {
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

    if (scrollPosition >= scrollMaxValue() * 0.9) {
      next();
    }
  }, [scrollPosition, isLoading, hasMore]);

  // TODO do something with the error
  return (
    <div>
      <ul className='mx-auto flex max-w-7xl flex-wrap gap-1 sm:justify-center md:w-10/12'>
        {movies.map((i) => (
          <li key={getUniqueId(i)}>
            {instanceOfMovie(i) ? (
              <MovieCard title={i.title} poster={i.poster_path} />
            ) : (
              <MovieCard title={i.name} poster={i.poster_path} />
            )}
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading..</p>}
      {error !== null && <p>{JSON.stringify(error)}</p>}
      {!isLoading && movies.length === 0 && (
        <p>No matching movies or series found!</p>
      )}
    </div>
  );
};

export default MovieList;
