import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


class App extends Component {






render(){
  console.log(this.props);
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route path="/" component={ PhotoContainer} />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  )
 }
}

export default App;


// <Route path="/cats"  component={ () => <PhotoContainer tag='cats '/> } />
// <Route path="/dogs"  component={ () => <PhotoContainer tag='dogs' /> } />
// <Route path="/computers"  component={ () => <PhotoContainer tag='computers' /> } />

// <Route exact path="/"  render={() =>  <Redirect to='/cats' /> } />
// <Route path="/cats"  component={ PhotoContainer} />
// <Route path="/dogs"  component={ () => <PhotoContainer tag='dogs' /> } />
// <Route path="/computers"  component={ () => <PhotoContainer tag='computers' /> } />

// <Route exact path="/"  render={() =>  <Redirect to='/cats' /> } />
// <Route path="/cats" key='1' component={ PhotoContainer} />
// <Route path="/cars" key='2' component={ PhotoContainer} />
// <Route path="/planes" key='3' component={ PhotoContainer} />
