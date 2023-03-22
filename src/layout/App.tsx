import React, { type ReactElement } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useSearchStore from '../components/search/searchStore';
import Header from './Header';
import { getPathToRoot, getPathToSearch } from './router';

const App = (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const reset = useSearchStore((state) => state.reset);

  const handleSearchOnChange = (newVal: string): void => {
    reset();

    navigate(newVal === '' ? getPathToRoot() : getPathToSearch(newVal), {
      state: { background: location },
    });
  };

  return (
    <div>
      <Header onSearchChange={handleSearchOnChange} />
      <div className='relative top-12'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
