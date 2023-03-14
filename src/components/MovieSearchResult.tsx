import React, { useMemo, type ReactElement } from 'react';
import type Movie from '../data/movie';
import type TVSeries from '../data/tvSeries';

import { useSearchMultiQuery } from '../services/tmdbService';
import MovieList from './MovieList';

interface MovieSearchResultProps {
  searchTerm: string;
}

const MovieSearchResult = ({
  searchTerm,
}: MovieSearchResultProps): ReactElement => {
  const currentPage = 2;
  const lastResult = useSearchMultiQuery({ query: searchTerm, page: currentPage - 1 });
  const currentResult = useSearchMultiQuery({ query: searchTerm, page: currentPage });
  const nextResult = useSearchMultiQuery({ query: searchTerm, page: currentPage + 1 });

  const movies = useMemo(() => {
    const result = new Map<number, Movie | TVSeries>();
    for (const data of [lastResult.data, currentResult.data, nextResult.data]) {
      if (data !== undefined) {
        data.forEach(i => result.set(i.id, i));
      }
    }
    return Array.from(result.values());
  }, [currentPage, lastResult.data, currentResult.data, nextResult.data]);

  const isLoading = lastResult.isLoading;
  const error = lastResult.error;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <section>
      {movies !== undefined && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found for &apos;{searchTerm}&apos;</p>
      )}
    </section>
  );
};

export default MovieSearchResult;
