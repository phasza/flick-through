import React from 'react';
import { createBrowserRouter, generatePath } from 'react-router-dom';

import MovieDetails from '../components/details/MovieDetails';
import TVSeriesDetails from '../components/details/TVSeriesDetails';
import SearchResult from '../components/search/SearchResult';
import App from './App';

const enum ROUTES {
  ROOT = '/',
  SEARCH = '/search/:query',
  MOVIE_DETAILS = 'movie/:id',
  TV_SERIES_DETAILS = 'series/:id',
}

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: ROUTES.SEARCH,
        element: <SearchResult />,
        children: [
          {
            path: ROUTES.MOVIE_DETAILS,
            element: <MovieDetails />,
          },
          {
            path: ROUTES.TV_SERIES_DETAILS,
            element: <TVSeriesDetails />,
          },
        ],
      },
    ],
  },
]);

export const getPathToRoot = (): string => ROUTES.ROOT;

export const getPathToSearch = (query: string): string =>
  generatePath(ROUTES.SEARCH, { query });

export const getPathToMovieDetails = (query: string, id: string): string =>
  generatePath(ROUTES.SEARCH, { query }) +
  '/' +
  generatePath(ROUTES.MOVIE_DETAILS, { id });

export const getPathToTVSeriesDetails = (query: string, id: string): string =>
  generatePath(ROUTES.SEARCH, { query }) +
  '/' +
  generatePath(ROUTES.TV_SERIES_DETAILS, { id });

export default router;
