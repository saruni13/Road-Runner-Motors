import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src=""/home/saruni/Downloads/logo.jpeg alt="RoadRunner Motors Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
