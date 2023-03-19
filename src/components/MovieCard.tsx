import React, { type ReactElement } from 'react';

import { PosterSizes, getImgSrcPath } from '../api/tmdbImageService';

interface MovieCardProps {
  title: string;
  poster: string;
}

const MovieCard = ({ title, poster }: MovieCardProps): ReactElement => {
  return (
    <div className='relative h-52 w-36 overflow-hidden rounded-md hover:cursor-pointer'>
      <div className='absolute z-50 h-full w-full bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100'>
        <h2 className='p-2 text-center font-bold text-white'>{title}</h2>
      </div>
      {poster !== null ? (
        <img
          className='absolute z-10 h-full w-full'
          src={getImgSrcPath(poster, PosterSizes.w185)}
          width='185'
        />
      ) : (
        <h2>{title}</h2>
      )}
    </div>
  );
};

export default MovieCard;
