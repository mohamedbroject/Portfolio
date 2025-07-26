import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="div-1">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      </div>
      <div className="div-2">
      <button href="#contact" className="contact-btn">Contact</button>
</div>
    </nav>
  );
};

export default Navbar;