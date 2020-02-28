import React from 'react';
// import PhotoContainer from './PhotoContainer'
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/cars'>Cars</NavLink></li>
        <li><NavLink to='/planes'>Planes</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
