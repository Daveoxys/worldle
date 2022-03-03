import React, { useState } from "react";
import WorldMap from "react-world-map";
import "../styles/Map.css";

const Map = () => {
  const [selected, onSelected] = useState(null);
  console.log({ selected });
  return (
    <div className="map">
      <h3>Select your continent to play!</h3>
      <WorldMap selected={selected} onSelect={onSelected} />
    </div>
  );
};

export default Map;

//onSelected -> render game for that continent
//create a small sample for each continent - country name and capital city (3 to 5 for demo)?
//need to split user input into substring - compare each character with answer[i]
//verify answer, if letter correct then background colour is green, if incorrect then red
//append '-success/failure' to className to render colour - keep continent selected
