import React, { type ReactElement } from "react";
import type Movie from "../../data/movie";

interface MovieListProps {
  movies: Movie[]
}

const MovieList = ({ movies }: MovieListProps): ReactElement => {
  return (
    <ul>
      {movies.map(i => <li key={i.id}>{i.title}</li> )}
    </ul>
  );
}

export default MovieList;