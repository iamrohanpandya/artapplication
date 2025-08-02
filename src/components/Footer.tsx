import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#f7f2ed] text-center py-4 text-sm">
      <div className="text-gray-700">
        &copy; {new Date().getFullYear()} Shutrashilps. All rights reserved.
      </div>
      <div className="flex justify-center gap-4 mt-2 text-xs text-gray-600">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;

