import React, { type ReactElement } from 'react';

import type Movie from '../data/movie';
import { instanceOfMovie } from '../data/movie';
import type TVSeries from '../data/tvSeries';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Array<Movie | TVSeries>;
}

const MovieList = ({ movies }: MovieListProps): ReactElement => {
  const sortedMovies = [...movies].sort((a, b) => a.popularity - b.popularity).reverse();
  return (
    <ul className='flex flex-wrap gap-1 mx-auto md:w-10/12 max-w-7xl'>
      {sortedMovies.map((i) => (
        <li key={i.id}>
          <MovieCard title={instanceOfMovie(i) ? i.title : i.name} poster={i.poster_path} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
