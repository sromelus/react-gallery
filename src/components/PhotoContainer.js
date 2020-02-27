import React, { Component } from 'react';
import PhotoTile from './PhotoTile'
import queryString from 'query-string'
import config from '../config'

const api_key = config;

class PhotoContainer extends Component {
  constructor() {
   super();
   this.state = {
     imageData: []
   };
  }

  componentDidMount(){
    // const tag = this.props.match.url.replace('/', '')
    // ${tag}
    const queryValue = queryString.parse(this.props.location.search)
    console.log(this.props.location.search);
    console.log(queryValue.search);
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=''&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(body => body.photos.photo)
      .then(photo => {
        this.setState({ imageData: photo })
      })
      .catch()
  }


  render(){

    const imageLists = this.state.imageData.map( image => {
        return(
          <PhotoTile
            key={image.id}
            id={image.id}
            server={image.server}
            secret={image.secret}
            farm={image.farm}
            title={image.title}
          />
        )
      })

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {imageLists}
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;

// console.log(this.props.history.push("/search"));
//
