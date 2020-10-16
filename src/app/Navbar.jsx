import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">The Book</NavLink>
      <div className="collapse navbar-collapse" id="">
        <ul className="navbar-nav mr-auto">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </ul>
      </div>
    </nav>
  );
};
