import React, { Component } from 'react';

class NotFound extends Component {



  render(){
    const searchQuery = this.props.location.search;
    if(searchQuery){
      this.props.history.push(`/${searchQuery}`);
    }

    return (
      <ul>
        <li className="not-found">
          <h1>404</h1>
          <h3>Ooops! Page Not Found </h3>
          <p>We're sorry the requested url was not found on the server.</p>
          <p>Please use the navigation buttons or the search bar to see more awesome pictures.</p>
        </li>
      </ul>
    )
  }
}

export default NotFound;
