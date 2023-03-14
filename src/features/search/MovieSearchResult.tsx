import React, { type ReactElement } from "react";
import MovieList from "./MovieList";
import { useSearchMoviesQuery } from "../../services/tmdbService";

interface MovieSearchResultProps {
  searchTerm: string
}

const MovieSearchResult = ({ searchTerm }: MovieSearchResultProps): ReactElement => {
  const {
    data: movies,
    error,
    isLoading,
  } = useSearchMoviesQuery(searchTerm, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <section>
      {
        (movies !== undefined && movies.length > 0)
          ? <MovieList movies={movies} />
          : <p>No movies found for &apos;{searchTerm}&apos;</p>
      }
    </section>);
};

export default MovieSearchResult;