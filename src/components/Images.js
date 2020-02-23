import React from 'react';

const Images = (props) => {

  const {id, server, secret, farm } = props;

  return (
    <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} />
    </li>
  )
}

export default Images;
