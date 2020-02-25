import React from 'react';

const ImageTile = (props) => {

  const {id, server, secret, farm, title } = props;

  return (
    <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title}/>
    </li>
    )
  }

export default ImageTile;
