import React, { type ReactElement } from 'react';

import SearchBar from './SearchBar';

interface HeaderProps {
  onSearchChange: (newVal: string) => void;
}

const Header = ({ onSearchChange }: HeaderProps): ReactElement => {
  return (
    <header className='fixed z-50 flex h-12 w-screen items-center justify-around bg-green-300'>
      <SearchBar onChange={onSearchChange} />
    </header>
  );
};

export default Header;
