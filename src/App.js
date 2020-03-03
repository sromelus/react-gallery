import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


class App extends Component {

render(){
  return (
    <BrowserRouter >
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/" component={ PhotoContainer} />
          {/* key props allows Route to mount the same component from different path  */}
          <Route path="/dogs" key='1' component={ PhotoContainer} />
          <Route path="/cars" key='2' component={ PhotoContainer} />
          <Route path="/planes" key='3' component={ PhotoContainer} />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  )
 }
}

export default App;
