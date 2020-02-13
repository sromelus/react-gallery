import React from 'react';
import Search from './components/Search'
import Topics from './components/Topics'
import Images from './components/Images'

import config from './config'


const App = () => {
  return (
    <div className="container">
      <Search />
      <Topics />
      <Images />
    </div>
  );
}

export default App;
