import React from 'react';
import ImageContainer from './ImageContainer'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';


const Topics = () => {

  return(
    <BrowserRouter>
      <div>
        <nav className="main-nav">
          <ul>
            <li><Link to='/cats'>Cats</Link></li>
            <li><Link to='/dogs'>Dogs</Link></li>
            <li><Link to='/computers'>Computers</Link></li>
          </ul>
          <h2>Results</h2>
        </nav>

        <Route exact path='/cats' render={ () => <ImageContainer tag='dogs' />} />

      </div>
    </BrowserRouter>
  )
}

export default Topics;
