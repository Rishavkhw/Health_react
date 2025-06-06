import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-zinc-600 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-red-400">
          My<span className="text-blue-400">Health</span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 text-white font-medium text-sm uppercase tracking-wide">
          <li>
            <Link to="/" className="hover:text-blue-300 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-300 transition-colors duration-200">Services & Pricing</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300 transition-colors duration-200">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
