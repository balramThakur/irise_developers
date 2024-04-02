// Hamburger.js
import React from 'react';
import '../CSS/Hamburger.css'; // Import the CSS file for styling

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Hamburger;
