import React, { Component } from 'react';
import PhotoTile from './PhotoTile'
import Loading from './Loading'
import NoSearchResult from './/NoSearchResult'
import queryString from 'query-string'
import config from '../config'

const api_key = config;

class PhotoContainer extends Component {
  // componentisMounted is a variable that check if the component is mounted
  componentisMounted = false;

  constructor() {
   super();
   this.state = {
     imageData: [],
     statusText: ''
   };
  }


// handleTagChange returns a string "Tag" from props provided to PhotoContainer by Routes

  handleTagChange(props) {
    let tag = ' '
    const searchQuery = props.location.search;
    const searchQueryValue = queryString.parse(props.location.search).search;
    const pathValue = props.match.url;
    
    if(pathValue === "/" && searchQueryValue){
      tag = searchQueryValue;
    } else if (pathValue.length > 0 && searchQueryValue) {
      props.history.push(`/${searchQuery}`)
    } else if (pathValue === "/")  {
      props.history.push("/dogs");
    } else {
      tag = pathValue.replace("/", "");
    }
    return tag;
  }

// handleDisplayResult manages what to render based on the response.
  handleDisplayResult(response, tag) {
    if (response.length > 0){
      return response;
    } else if (response.length === 0 && this.state.statusText === 'ok'){
      return <NoSearchResult tag={tag} />
    } else {
      return <Loading />
    }
  }

  componentDidMount(){
    this.componentisMounted = true;
    const currentTag = this.handleTagChange(this.props)

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${currentTag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(response => {
        if (this.componentisMounted) {
          this.setState({
            imageData: response.photos.photo,
            statusText: response.stat
          })
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  componentWillUnmount(){
    // Redirecting in handleTagChange will unmount the component and reseting componentisMounted to false thus preventing it from setting state.
    this.componentisMounted = false;
  }


  render(){
    const currentTag = this.handleTagChange(this.props);

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
        <h3>Images of {currentTag}</h3>
        <ul>
          { this.handleDisplayResult(imageLists, currentTag) }
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;
