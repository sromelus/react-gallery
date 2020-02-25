import React from 'react';
import Search from './components/Search'
import Topics from './components/Topics'
import ImageContainer from './components/ImageContainer'


const App = () => {
  return (
    <div className="container">
      <Search />
      <Topics />
      <ImageContainer />
    </div>
  )
}

export default App;
