import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu-list">
        <li>
          <Link to="#">Platform</Link>
        </li>
        <li>
          <Link to="#">Advantages</Link>
        </li>
        <li>
          <Link to="#">News & Resources</Link>
        </li>
        <li>
          <Link to="#">Request for Demo</Link>
        </li>
        <button>Login</button>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
