import React, { type ReactElement, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import useMovieStore, { moviesListSelector } from '../data/movieStore';
import MovieList from './MovieList';

const MovieSearchResult = (): ReactElement => {
  const { query } = useParams();

  if (query === undefined) {
    throw Error('Invalid route configuration, query param is undefined');
  }

  const movies = useMovieStore(moviesListSelector);
  const isLoading = useMovieStore((state) => state.isLoading);
  const error = useMovieStore((state) => state.error);
  const totalPages = useMovieStore((state) => state.totalPages);
  const fetchBySearch = useMovieStore((state) => state.fetchBySearch);

  const [currentPage, setCurrentPage] = useState(1);

  const didMount = useRef(true);
  useEffect(() => {
    // Skip first render to avoid double fetch
    if (didMount.current) {
      didMount.current = false;
    } else {
      fetchBySearch(query, currentPage).catch(console.error);
    }
  }, [currentPage, query]);

  return (
    <section>
      <MovieList
        movies={movies}
        next={() => {
          setCurrentPage((prev) => prev + 1);
        }}
        hasMore={currentPage < totalPages}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
};

export default MovieSearchResult;
