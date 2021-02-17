import React from 'react';
import { NavLink } from 'react-router-dom';

const navLink = {
  display: 'inline-block',
  padding: '0.5em',
  textDecoration: 'none',
  background: 'lightblue',
}

const NavBar = () => {
  return (
    <div className="navbar" style={{background: 'lightblue'}}>
      <NavLink 
        style={navLink} 
        to="/"
      >
          Home
      </NavLink>
      <NavLink 
        style={navLink} 
        to="/movies"
      >
        Movies
      </NavLink>
      <NavLink 
        style={navLink} 
        to="/directors"
      >
        Directors
      </NavLink>
      <NavLink 
        style={navLink} 
        to="/actors"
      >
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
