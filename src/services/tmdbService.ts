import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type Movie from '../data/movie';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '21907d296a26ea0f8ea5ced654780804';

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchMovies: builder.query<Movie[], string>({
      query: (query: string) =>
        `search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`,
      transformResponse: (rawResult: { results: Movie[] }) => {
        return rawResult.results;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchMoviesQuery } = tmdbApi;
