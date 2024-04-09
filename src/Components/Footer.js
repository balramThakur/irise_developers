// Footer.js
import React from 'react';
import '../CSS/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p><a href="mailto:irisedevelopers@gmail.com">Email: irisedevelopers@gmail.com</a></p>
          <p>Phone: <a href="tel:+919819294989">+919819294989</a>
          /<a href="tel:++919322073448">+919322073448</a></p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
