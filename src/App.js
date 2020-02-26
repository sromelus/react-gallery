import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import PhotoContainer from './components/PhotoContainer'
import NotFound from './components/NotFound'
const PhotoContext = React.createContext();
const { Provider } = PhotoContext;
const { Consumer } = PhotoContext;


const App = (props) => {
  return (
    <Provider>
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" component={PhotoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
