// Card.js
import React from 'react';
import '../CSS/CardView.css'; // Import the CSS file for styling

const CardView = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardView;
