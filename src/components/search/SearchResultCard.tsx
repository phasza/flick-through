import React, { type ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PosterSizes, getImgSrcPath } from '../../api/tmdbImage';
import {
  type SearchMultiResult,
  instanceOfSearchResultMovie,
} from '../../api/tmdbSearchService';
import {
  getPathToMovieDetails,
  getPathToTVSeriesDetails,
} from '../../layout/router';

interface Props {
  result: SearchMultiResult;
}

const SearchResultCard = ({ result }: Props): ReactElement => {
  const { query } = useParams();

  if (query === undefined) {
    throw Error('Invalid route configuration, query param is undefined');
  }
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    if (instanceOfSearchResultMovie(result)) {
      navigate(getPathToMovieDetails(query, `${result.id}`));
    } else {
      navigate(getPathToTVSeriesDetails(query, `${result.id}`));
    }
  };

  const title = instanceOfSearchResultMovie(result)
    ? result.title
    : result.name;

  return (
    <div
      className='relative h-48 w-32 overflow-hidden rounded-md shadow-md shadow-slate-900 hover:cursor-pointer lg:h-60 lg:w-40'
      onClick={handleOnClick}
    >
      <div className='absolute z-50 h-full w-full bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100'>
        <h2 className='p-2 text-center font-bold text-white'>{title}</h2>
      </div>
      {result.poster_path !== null ? (
        <img
          className='absolute z-10 h-full max-w-full'
          src={getImgSrcPath(result.poster_path, PosterSizes.w154)}
        />
      ) : (
        <h2>{title}</h2>
      )}
    </div>
  );
};

export default SearchResultCard;
