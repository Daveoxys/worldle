import React from "react";
import { useHistory } from "react-router-dom";
import WorldMap from "react-world-map";
import "../styles/Map.css";

const Map = () => {
  const history = useHistory();

  return (
    <div className="map">
      <h3>Select your continent to play!</h3>
      <WorldMap
        onSelect={(continent) => {
          history.push(`/word-game/${continent}`);
        }}
      />
    </div>
  );
};

export default Map;
