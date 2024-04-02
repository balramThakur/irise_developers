import React from 'react';
import '../CSS/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Your Logo</h1>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/">About</a></li>
          <li className="nav-item"><a href="/">Services</a></li>
          <li className="nav-item"><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
