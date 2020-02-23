import React, { Component } from 'react';
import Search from './components/Search'
import Topics from './components/Topics'
import Images from './components/Images'

import config from './config'

const api_key = config;


class App extends Component {
  constructor() {
    super();
    this.state = {
      imageData: []
    };
  }

  componentDidMount(){
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(body => body.photos.photo)
      .then(photo => {
        this.setState({ imageData: photo })
      })
      .catch()
  }


  render(){

    return (
      <div className="container">
        <Search />
        <Topics
          images={this.state.imageData}
        />
      </div>
    )
  }
}

export default App;
