import React, { type ReactElement } from 'react';
import Header from './Header';

const App = (): ReactElement => {
  return (
    <div>
      <Header />
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </div>
  );
};

export default App;
