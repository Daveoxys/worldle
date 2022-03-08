import React from "react";
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
        <p>Conquer the world by guessing the correct city in each continent!</p>
        <p>
          You will get five tries to correctly guess the city in each continent,
          after each try any correct letters in your guess will show how close
          you were to the correct answer. Conquer the world by guessing the
          correct country and capital city in each continent!
        </p>
        <hr />
        <p>Worldle will refresh new answers every day!</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
