import React from 'react';

import hogs from '../../porkers_data'
import HogTile from '../HogTile/HogTile';


function HogList () {
  return (
  <div className="hog-list">
    {hogs.map(hog => (
      <HogTile 
      key={hog.name} 
      name={hog.name} 
      image={hog.image}
      specialty={hog.specialty}
      weight={hog.weight}
      greased={hog.greased}
      medal={hog["highest medal achieved"]}
      />
    ))}
  </div>
  )
}

export default HogList;
