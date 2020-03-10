import React from 'react';

const NoSearchResult = (props) => {
  return (
    <li className="not-found">
    <p>{`Sorry! No results for ${props.tag}, please search for something more specific.`}</p>
    </li>
  )
}

export default NoSearchResult;
