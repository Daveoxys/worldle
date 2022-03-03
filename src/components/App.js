import "../styles/App.css";
import useLocalStorage from "use-local-storage";
import NavBar from "./NavBar";
import Map from "./Map";
import Keyboard from "./Keyboard";
import Game from "./Game";
import Popup from "./Popup";
import { useState, useEffect } from "react";

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 100);
  }, []);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>popup</h3>
        <p>Instructions to follow.</p>
      </Popup>
      <NavBar />
      <div className="toggle">
        <button onClick={switchTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
      <Map />
      <Game />

      <Keyboard />
    </div>
  );
}

export default App;
