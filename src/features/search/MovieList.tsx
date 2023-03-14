import React, { type ReactElement } from 'react';

import type Movie from '../../data/movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps): ReactElement => {
  return (
    <ul>
      {movies.map((i) => (
        <li key={i.id}><MovieCard movie={i} /></li>
      ))}
    </ul>
  );
};

export default MovieList;
