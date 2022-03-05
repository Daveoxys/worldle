import React, { useState } from "react";
import Alert from "./Alert";
import continents from "../data/continents.json";
import "../styles/Game.css";

const Game = () => {
  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * continents.length);
    return continents[randomIndex];
  };

  // const getCountries = (continent) =>
  //   Object.values(json).filter(
  //     (country) => country.continent === continent
  //   );

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
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [guesses, setGuesses] = useState(5);

  const decrementGuesses = () => {
    if (guesses === 0) {
      return;
    }
    setGuesses((prevGuesses) => prevGuesses - 1);
  };

  const handleGuess = (event) => {
    event.preventDefault();
    //if usersGuess === JSON answer
    //setAlert({ message: "Well done!", success: true });
    //renderCity && reset initialState

    //if usersGuess !== JSON answer
    //attempts remaining -1

    if (guesses === 1) {
      setAlert({
        message: `Incorrect - you have ${guesses} life remaining`,
        success: false,
      });
    } else {
      setAlert({
        message: `Incorrect - you have ${guesses} lives remaining`,
        success: false,
      });
    }
  };

  return (
    <div className="Game">
      <form onSubmit={handleGuess}>
        <Alert message={alert.message} success={alert.success} />
        <input placeholder="Country" />
        <button className="submit-guess" onClick={decrementGuesses}>
          Submit
        </button>
      </form>

      {/* <div className="countries">
        {Continents.map((country) => {
          if (country.continent === "na") {
            return (
              <h4>
                {country.country}, {country.city}
              </h4>
            );
          }
        })}
      </div> */}
    </div>
  );
};

export default Game;
