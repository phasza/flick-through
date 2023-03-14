import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type Movie from '../data/movie';
import { instanceOfMovie } from '../data/movie';
import type Profile from '../data/profile';
import type TVSeries from '../data/tvSeries';
import { instanceOfTVSeries } from '../data/tvSeries';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '21907d296a26ea0f8ea5ced654780804';

interface SearchQueryParams {
  query: string,
  page: number
}

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchMulti: builder.query<Array<Movie | TVSeries>, SearchQueryParams>({
      query: ({ query, page }: SearchQueryParams) => {
        return `search/multi?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${query}`;
      },
      transformResponse: (rawResult: { results: Array<Movie | TVSeries | Profile> }): Array<Movie | TVSeries> => {
        const result: Array<Movie | TVSeries> = [];
        rawResult.results.forEach(i => {
          if (instanceOfMovie(i) || instanceOfTVSeries(i)) {
            result.push(i);
          }
        });
        return result;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchMultiQuery } = tmdbApi;
