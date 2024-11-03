import React, { useState } from 'react';

function HogTile({ name, image, specialty, weight, greased, medal, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails(!showDetails);
  }

  function handleHideClick (e) {
    e.stopPropagation(); //Prevent the click event from triggering showdetails toggle
    onHide(name);
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
      <button onClick={handleHideClick}>Hide</button>
    </div>
  );
}

export default HogTile;

