import React, { useState } from "react";
import WorldMap from "react-world-map";
import "../styles/Map.css";

const Map = () => {
  const [selected, onSelect] = useState(null);
  // console.log({ selected });

  return (
    <div className="map">
      <h3>Select your continent to play!</h3>
      <WorldMap selected={selected} onSelect={onSelect} />
    </div>
  );
};

export default Map;
