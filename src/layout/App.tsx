import React, { type ReactElement, useState } from 'react';

import MovieSearchResult from '../features/search/MovieSearchResult';
import Header from './Header';

const App = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header
        onSearchChange={(val: string) => {
          setSearchTerm(val);
        }}
      />
      {searchTerm !== '' && <MovieSearchResult searchTerm={searchTerm} />}
    </div>
  );
};

export default App;
