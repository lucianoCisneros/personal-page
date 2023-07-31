import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="logo">&#60;/&#62;</div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a className='menu-item' href="#about">About Me</a></li>
          <li><a className='menu-item' href="#skills">Skills</a></li>
          <li><a className='menu-item' href="#experience">Experience</a></li>
          <li><a className='menu-item' href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
