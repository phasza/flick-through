import React, { type ChangeEvent, useState, type ReactElement } from 'react';

const Header = (): ReactElement => {
  const [search, setSearch] = useState('');

  const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <input
        type='search'
        value={search}
        onChange={handleOnSearchChange}
        placeholder='Search movies...'
      />
    </header>
  );
};

export default Header;
