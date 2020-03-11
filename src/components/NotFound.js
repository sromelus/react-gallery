import React from 'react';

const NotFound = () => {

  return (
    <ul>
      <li className="not-found">
        <h1>404</h1>
        <h3>Ooops! Page Not Found </h3>
        <p>We're sorry the requested url was not found on the server.</p>
      </li>
      <br/>
      <a href='/dogs' className="home-button">Back To Main Page</a>
    </ul>
  )
}

export default NotFound;
