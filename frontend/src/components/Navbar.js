import React from 'react';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <div className="nav">
      <div className="logo">Rohan</div>
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default CustomNavbar;
