import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Optional external styles

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/miniature-art', label: 'Miniature Art' },
    { path: '/paper-art', label: 'Paper Art' },
    { path: '/about', label: 'About Us' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">🎨 Shutrashilps</div>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
