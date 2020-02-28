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

  handleTagChange(props) {
    let tag = ' '
    const searchQuery = props.location.search;
    const querySearchValue = queryString.parse(props.location.search).search;
    const queryPathValue = props.match.url;

    if(queryPathValue === "/" && querySearchValue){
      tag = querySearchValue;
    } else if (queryPathValue.length > 0 && querySearchValue) {
      props.history.push(`/${searchQuery}`)
    } else if (queryPathValue === "/")  {
      this.props.history.push("/dogs");
    } else {
      tag = queryPathValue.replace("/", "");
    }
    return tag;
  }

  componentDidMount(){

  const currentTag = this.handleTagChange(this.props)

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${currentTag}&per_page=24&format=json&nojsoncallback=1`)
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
