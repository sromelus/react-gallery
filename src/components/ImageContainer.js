import React, { Component } from 'react';
import ImageTile from './ImageTile'
import config from '../config'

const api_key = config;

class ImageContainer extends Component {
  constructor() {
   super();
   this.state = {
     imageData: []
   };
  }

  componentDidMount(){
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=plane&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(body => body.photos.photo)
      .then(photo => {
        this.setState({ imageData: photo })
      })
      .catch()
  }


  render(){

    console.log(this.props);

    const imageLists = this.state.imageData.map( image => {
        return(
          <ImageTile
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
        <ul>
          {imageLists}
        </ul>
      </div>
    )
  }
}

export default ImageContainer;
