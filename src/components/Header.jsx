import React from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe46Wi_he1Fq6JyXzyUE56IInCVat_uhXEB3F9WwYFLg&s" alt="RoadRunner Motors Logo" />
        <h1>ROAD RUNNER MOTORS</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
