import React, { type ReactElement } from 'react';

import SearchBar from './SearchBar';

interface HeaderProps {
  onSearchChange: (newVal: string) => void;
}

const Header = ({ onSearchChange }: HeaderProps): ReactElement => {
  return (
    <header>
      <SearchBar onChange={onSearchChange} />
    </header>
  );
};

export default Header;
