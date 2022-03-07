import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import eu from "../data/eu.json";
import "../styles/Game.css";

const Game = () => {
  const [country, setCountry] = useState(null);

  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * eu.length);
    return eu[randomIndex];
  };

  const compareAnswer = () => {
    const user = "Germany";
    console.log(`country is ${country}`);
    if (country === user) {
      return "Correct";
    } else {
      return "Unlucky";
    }
  };

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

  //useEffect runs getRandomCountry on first render only
  useEffect(() => {
    setCountry(getRandomCountry());
    console.log(`getRandomCountry is ${getRandomCountry()}`);
  }, []);

  return (
    <div className="Game">
      <h1>{compareAnswer()}</h1>

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
