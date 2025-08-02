import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">🎨 Shutrashilps</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/miniature-art">Miniature Art</Link>
          <Link to="/paper-art">Paper Art</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          
          
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
