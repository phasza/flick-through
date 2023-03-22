import React, { type ReactElement } from 'react';

import { type SearchMultiResult } from '../../api/tmdbSearchService';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import SearchResultCard from './SearchResultCard';

interface Props {
  movies: SearchMultiResult[];
  next: () => void;
  hasMore: boolean;
  isLoading: boolean;
  error: unknown | null;
}

const SearchResultList = ({
  movies,
  next,
  hasMore,
  isLoading,
  error,
}: Props): ReactElement => {
  useInfiniteScroll(isLoading, hasMore, next);

  // TODO do something with the error
  return (
    <div className='relative z-10'>
      <ul className='mx-auto flex flex-wrap justify-center gap-2'>
        {movies.map((i) => (
          <li key={i.id}>
            <SearchResultCard result={i} />
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading..</p>}
      {error !== null && <p>{JSON.stringify(error)}</p>}
      {!isLoading && movies.length === 0 && (
        <p>No matching movies or series found!</p>
      )}
    </div>
  );
};

export default SearchResultList;
