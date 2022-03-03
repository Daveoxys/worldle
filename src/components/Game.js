import React, { useState } from "react";
import Alert from "./Alert";
import "../styles/Game.css";

const Game = () => {
  // const getCountries = (continent) =>
  //   Object.values(json).filter((country) => country.continent === continent);

  // const getRandomCountry = (continent) => {
  //   const countries = getCountries(continent);
  //   const randomIndex = Math.ceil(Math.random() * countries.length);
  //   return countries[randomIndex];
  // };

  const initialState = {
    alert: {
      message: "",
      success: false,
    },
    guesses: {
      remaining: 5,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [guesses, setGuesses] = useState(initialState.guesses);

  const handleGuess = (event) => {
    event.preventDefault();
    //if usersGuess === JSON answer
    //setAlert({ message: "Well done!", success: true });
    //renderCity && reset initialState

    //if usersGuess !== JSON answer
    //attempts remaining -1

    setAlert({
      message: `Incorrect - you have ${guesses.remaining} attempts remaining`,
      success: false,
    });
  };

  return (
    <div className="Game">
      <form onSubmit={handleGuess}>
        <Alert message={alert.message} success={alert.success} />
        <input placeholder="Country" />
        <button className="submit-guess">Submit</button>
      </form>
    </div>
  );
};

export default Game;
