import React, { useState } from 'react';

function HogTile({ name, image, specialty, weight, greased, medal }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="hog-tile" onClick={handleClick}> 
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {showDetails && (
        <div className="hog-details">
          <p><strong>Specialty:</strong> {specialty}</p> 
          <p><strong>Weight:</strong> {weight} kg</p>
          <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
          <p><strong>Highest Medal Achieved:</strong> {medal}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;

