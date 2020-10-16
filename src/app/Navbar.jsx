import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">The Book</Link>
    </nav>
  );
};
