import React, { type ReactElement } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import useMovieStore from '../data/movieStore';
import Header from './Header';
import { getPathToRoot, getPathToSearch } from './router';

const App = (): ReactElement => {
  const navigate = useNavigate();
  const reset = useMovieStore((state) => state.reset);

  const handleSearchOnChange = (newVal: string): void => {
    reset();

    navigate(newVal === '' ? getPathToRoot() : getPathToSearch(newVal));
  };

  return (
    <div>
      <Header onSearchChange={handleSearchOnChange} />
      <Outlet />
    </div>
  );
};

export default App;
