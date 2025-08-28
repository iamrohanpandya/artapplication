import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">🎨 Sutrashilps</Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>

          {/* GALLERY DROPDOWN */}
          <div className="nav-item dropdown" tabIndex={0}>
            <span className="nav-link">Gallery <span className="chev">▾</span></span>
            <div className="dropdown-menu">
              <Link to="/miniature-art">Miniature Art</Link>
              <Link to="/paper-art">Paper Art</Link>
              <Link to="/paper-mache">Paper Mache</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>

          {/* RECOGNITION DROPDOWN */}
          <div className="nav-item dropdown" tabIndex={0}>
            <span className="nav-link">Recognition <span className="chev">▾</span></span>
            <div className="dropdown-menu">
              <Link to="/certificates">Certificates & Awards</Link>
              <Link to="/exhibitions">Exhibitions</Link>
              <Link to="/media">Media & Newspaper</Link>
            </div>
          </div>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
