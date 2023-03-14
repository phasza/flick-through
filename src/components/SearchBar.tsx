import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, {
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
  useState,
} from 'react';

interface SearchBarProps {
  onChange: (newVal: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps): ReactElement => {
  const [search, setSearch] = useState('');

  const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newVal = e.target.value;
    setSearch(newVal);
    onChange(newVal);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='search'
        value={search}
        onChange={handleOnSearchChange}
        placeholder='Search movies...'
      />
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6' />
      </button>
    </form>
  );
};

export default SearchBar;
