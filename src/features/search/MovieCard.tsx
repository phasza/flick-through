import React, { type ReactElement } from "react";
import type Movie from "../../data/movie";
import { getImgSrcPath, PosterSizes } from "../../services/tmdbImageService";

interface MovieCardProps {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps): ReactElement => {

  return (
    <div>
      <h2>{movie.title}</h2>
      {movie.poster_path !== null && <img src={getImgSrcPath(movie.poster_path, PosterSizes.w185)} width='185' />}
    </div>
  );
}

export default MovieCard;