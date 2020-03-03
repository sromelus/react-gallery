import React, { Component } from 'react';
import PhotoTile from './PhotoTile'
import Loading from './Loading'
import queryString from 'query-string'
import config from '../config'

const api_key = config;

class PhotoContainer extends Component {
  // isMounted is a variable that check if the component is mounted
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
    const querySearchValue = queryString.parse(props.location.search).search;
    const queryPathValue = props.match.url;

    if(queryPathValue === "/" && querySearchValue){
      tag = querySearchValue;
    } else if (queryPathValue.length > 0 && querySearchValue) {
      props.history.push(`/${searchQuery}`)
    } else if (queryPathValue === "/")  {
      props.history.push("/dogs");
    } else {
      tag = queryPathValue.replace("/", "");
    }
    return tag;
  }

// handleDisplayResult manages what to render based on the response.
  handleDisplayResult(response, tag) {
    if (response.length > 0){
      return response;
    } else if (response.length === 0 && this.state.statusText === 'ok'){
      return <h1> {`Sorry! No results for ${tag}, please search for something else.`} </h1>
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
    // Redirecting in handleTagChange will unmount the component and reseting isMounted to false thus preventing it from setting state.
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
        <h2>Results for {currentTag}</h2>
        <ul>
          { this.handleDisplayResult(imageLists, currentTag) }
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;
