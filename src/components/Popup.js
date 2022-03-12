import React from "react";
import present from "../data/images/Present.png";
import correct from "../data/images/Correct.png";
import wrong from "../data/images/Wrong.png";
import "../styles/Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
        <h3>Welcome to Worldle!</h3>
        <p>Guess a six-letter city from one of the world's continents.</p>
        <p>
          You will have five attempts to correctly guess the city in each
          continent. After each try any correct letters in your guess will show
          how close you were to the correct answer.
        </p>
        <hr />
        <h3>Examples</h3>
        <img src={correct} alt="correct" />
        <p>The letter S is in the city name and the correct spot.</p>
        <img src={present} alt="present" />
        <p>The letter S is in the city name but the wrong spot.</p>
        <img src={wrong} alt="wrong" />
        <p>None of the letters are in the city name.</p>
        <br />
        <hr />
        <p>Conquer the world by guessing the correct city in each continent!</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
