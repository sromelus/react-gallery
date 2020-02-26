import React from 'react';

const PhotoTile = (props) => {

  const {id, server, secret, farm, title } = props;

  return (
    <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title}/>
    </li>
    )
  }

export default PhotoTile;
