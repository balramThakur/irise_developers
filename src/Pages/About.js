// AboutPage.js
import React from 'react';
import '../CSS/About.css'; // Import the CSS file for styling
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="about-page">
        <Navbar/>
      <div className="about-content">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat felis eu urna dictum, id condimentum odio fermentum. Nam in nisi tincidunt, sollicitudin magna vitae, vulputate lacus.</p>
        <p>Integer et mi id odio varius luctus non nec turpis. Nulla sed augue ut nisi tristique vehicula. Nam id pharetra dolor. Duis laoreet purus eu ex consectetur, non vestibulum purus blandit. Donec tristique urna vel tortor consectetur, et ultrices odio efficitur. Sed id rhoncus lacus.</p>
      </div>
      <div className="about-image">
        <img src="about_image.jpg" alt="About Us" />
      </div>
      <Footer/>
    </div>
  );
};

export default About;
