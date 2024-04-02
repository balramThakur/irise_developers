// Carousel.js
import React, { useState } from 'react';
import '../CSS/Carousel.css'; // Import the CSS file for styling

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-items" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>Prev</button>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
