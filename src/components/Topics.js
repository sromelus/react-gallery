import React from 'react';
import Images from './Images'

const Topics = (props) => {

  const { images } = props;

  console.log(images);

  const imageLists = images.map( image => {
    return(
      <Images
        key={image.id}
        id={image.id}
        server={image.server}
        secret={image.secret}
        farm={image.farm}
      />
    )
  })



  return(
    <div>
      <nav className="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>

      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {imageLists}
        </ul>
      </div>
    </div>

  )
}

export default Topics;
