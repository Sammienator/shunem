import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSpa } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-spa-gold text-white p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaSpa className="text-black text-3xl" />
          <span className="text-2xl font-bold text-black">Shunem Therapy</span>
        </div>
        <div className="flex gap-6 items-center">
          <NavLink to="/" className={({ isActive }) => `hover:text-spa-gold transition ${isActive ? 'text-black' : ''}`}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `hover:text-spa-gold transition ${isActive ? 'text-black' : ''}`}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:text-spa-gold transition ${isActive ? 'text-black' : ''}`}>About Us</NavLink> {/* Add About Us link */}
          <NavLink to="/gallery" className={({ isActive }) => `hover:text-spa-gold transition ${isActive ? 'text-black' : ''}`}>Gallery</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:text-spa-gold transition ${isActive ? 'text-black' : ''}`}>Contact</NavLink>
          <NavLink to="/services" className="bg-spa-gold text-spa-brown px-4 py-2 rounded-lg hover:bg-spa-aqua transition">
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;