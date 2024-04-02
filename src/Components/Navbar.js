import React from 'react';
import '../CSS/Navbar.css'; 
import logo from '../Images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className='logo'/>
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
