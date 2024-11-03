import React from 'react';

import hogs from '../../porkers_data'
import HogTile from '../HogTile/HogTile';


function HogList ({hogs, greasedOnly, sortKey, hiddenHogs, onHide}) {

  let filteredHogs = greasedOnly ? hogs.filter(hog => hog.greased) : hogs;

  //Filter and sort hogs based on the state
  if (sortKey) {
    filteredHogs = [...filteredHogs].sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortKey === "weight") {
        return a.weight - b.weight;
      }
      return 0; // Fallback if no sortkey is selected
    })
  }

  const visibleHogs = filteredHogs.filter(hog => !hiddenHogs.includes(hog.name));
  return (
  <div className="hog-list">
    {visibleHogs.map(hog => (
      <HogTile 
      key={hog.name} 
      name={hog.name} 
      image={hog.image}
      specialty={hog.specialty}
      weight={hog.weight}
      greased={hog.greased}
      medal={hog["highest medal achieved"]}
      onHide={onHide}
      />
    ))}
  </div>
  )
}

export default HogList;
