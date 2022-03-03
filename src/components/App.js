import "../styles/App.css";
import NavBar from "./NavBar";
import Map from "./Map";
import Keyboard from "./Keyboard";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Map />
      <Game />
      <Keyboard />
    </div>
  );
}

export default App;
