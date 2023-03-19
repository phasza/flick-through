import React from 'react';
import { createBrowserRouter, generatePath } from 'react-router-dom';

import App from './App';
import MovieDetails from './MovieDetails';
import MovieSearchResult from './MovieSearchResult';

const enum ROUTES {
  ROOT = '/',
  SEARCH = '/search/:query',
  MOVIE_DETAILS = 'search/:query/details/:id',
}

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: ROUTES.SEARCH,
        element: <MovieSearchResult />,
        children: [
          {
            path: ROUTES.MOVIE_DETAILS,
            element: <MovieDetails />,
          },
        ],
      },
    ],
  },
]);

export const getPathToRoot = (): string => ROUTES.ROOT;

export const getPathToSearch = (query: string): string =>
  generatePath(ROUTES.SEARCH, { query });

export default router;
