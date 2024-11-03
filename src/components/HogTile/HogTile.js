import React, { useState } from 'react';
import './HogTile.module.css';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

function HogTile({ name, image, specialty, weight, greased, medal, onHide }) {
  // State for toggling details view
  const [showDetails, setShowDetails] = useState(false);

  // Toggles details view
  function handleClick() {
    setShowDetails(!showDetails);
  }

  // Handles hiding a hog
  function handleHideClick(e) {
    e.stopPropagation(); // Prevent the click event from triggering showDetails toggle
    onHide(name); // Calls the onHide function passed down from HogList
  }

  return (
    <Card onClick={handleClick}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {showDetails && (
          <>
            <Card.Meta>
              <span className='date'>{specialty}</span>
            </Card.Meta>
            <Card.Description>
              <strong>Weight:</strong> {weight} kg <br />
              <strong>Greased:</strong> {greased ? "Yes" : "No"} <br />
              <strong>Highest Medal Achieved:</strong> {medal}
            </Card.Description>
          </>
        )}
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleHideClick} icon>
          <Icon name='hide' /> Hide
        </Button>
      </Card.Content>
    </Card>
  );
}

export default HogTile;



