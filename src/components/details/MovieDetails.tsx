import React, { type ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDetails } from '../../api/tmdbDetailsService';
import { PosterSizes, getImgSrcPath } from '../../api/tmdbImage';
import useFetchData from '../../hooks/useFetchData';
import DetailsModal from './DetailsModal';

const MovieDetails = (): ReactElement => {
  const { id } = useParams();

  if (id === undefined) {
    throw Error('Invalid route, missing id');
  }

  const { result, isLoading, error } = useFetchData(
    async () => await fetchMovieDetails(+id)
  );

  return (
    <DetailsModal isLoading={isLoading} error={error}>
      {result !== undefined && (
        <div className='relative grid h-full w-full grid-cols-8 p-14'>
          <img
            className='col-span-3 columns-1'
            src={getImgSrcPath(result.poster_path, PosterSizes.w342)}
          />
          <div className='col-span-5 flex columns-4 flex-col'>
            <h2 className='mb-20 text-left text-3xl font-bold text-white'>
              {result.title}
            </h2>

            <h2 className='text-lg'>{result.overview}</h2>
            <p>{result.release_date}</p>
            <p>{result.original_language}</p>
          </div>
        </div>
      )}
    </DetailsModal>
  );
};

export default MovieDetails;
