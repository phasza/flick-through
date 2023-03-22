import React, { type ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { getYearFromDate } from '../../api/tmdbDate';
import {
  fetchTVSeriesContentRating,
  fetchTVSeriesDetails,
} from '../../api/tmdbDetailsService';
import { PosterSizes, getImgSrcPath } from '../../api/tmdbImage';
import useFetchData from '../../hooks/useFetchData';
import DetailsModal from './DetailsModal';

const TVSeriesDetails = (): ReactElement => {
  const { id } = useParams();

  if (id === undefined) {
    throw Error('Invalid route, missing id');
  }

  const {
    result: series,
    isLoading,
    error,
  } = useFetchData(async () => await fetchTVSeriesDetails(+id));
  const { result: rating } = useFetchData(
    async () => await fetchTVSeriesContentRating(+id)
  );

  return (
    <DetailsModal isLoading={isLoading} error={error}>
      {series !== undefined && (
        <div className='relative grid h-full w-full grid-cols-8 p-14'>
          <img
            className='col-span-3 columns-1'
            src={getImgSrcPath(series.poster_path, PosterSizes.w342)}
          />
          <div className='col-span-5 flex columns-4 flex-col'>
            <div className='mb-20'>
              <h2 className='text-3xl font-bold text-white'>
                {series.name}
                <span className='ml-4 font-thin'>
                  ({getYearFromDate(series.first_air_date)})
                </span>
              </h2>
              <ul>
                {rating !== undefined && rating !== null && (
                  <li key='rating' className=' rounded-fullm '>
                    {rating.rating}
                  </li>
                )}
              </ul>
            </div>

            <h2 className='text-lg'>{series.overview}</h2>
            <p>{series.first_air_date}</p>
            <p>{series.original_language}</p>
          </div>
        </div>
      )}
    </DetailsModal>
  );
};

export default TVSeriesDetails;
