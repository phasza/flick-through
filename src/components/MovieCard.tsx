import React, { type ReactElement } from 'react';

import { PosterSizes, getImgSrcPath } from '../services/tmdbImageService';

interface MovieCardProps {
  title: string;
  poster: string;
}

const MovieCard = ({ title, poster }: MovieCardProps): ReactElement => {
  return (
    <div className='relative w-36 h-52 rounded-md overflow-hidden hover:cursor-pointer'>
      <div className='absolute z-50 w-full h-full opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100'>
        <h2 className='text-white'>{title}</h2>
      </div>
      {poster !== null ? (
        <img
          className='absolute z-10 w-full h-full'
          src={getImgSrcPath(poster, PosterSizes.w185)}
          width='185'
        />
      ) : (<h2>{title}</h2>)}
    </div>
  );
};

export default MovieCard;
