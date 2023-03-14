import React, { type ReactElement } from 'react';

import SearchBar from './SearchBar';

interface HeaderProps {
  onSearchChange: (newVal: string) => void;
}

const Header = ({ onSearchChange }: HeaderProps): ReactElement => {
  return (
    <header className='flex justify-around items-center h-12 bg-green-300'>
      <SearchBar onChange={onSearchChange} />
    </header>
  );
};

export default Header;
