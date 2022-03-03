import React from "react";
import "../styles/Keyboard.css";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div class="keyboard-top">
        <button data-key="q">Q</button>
        <button data-key="w">W</button>
        <button data-key="e">E</button>
        <button data-key="r">R</button>
        <button data-key="t">T</button>
        <button data-key="y">Y</button>
        <button data-key="u">U</button>
        <button data-key="i">I</button>
        <button data-key="o">O</button>
        <button data-key="p">P</button>
      </div>
      <div class="keyboard-middle">
        <button data-key="a">A</button>
        <button data-key="s">S</button>
        <button data-key="d">D</button>
        <button data-key="f">F</button>
        <button data-key="g">G</button>
        <button data-key="h">H</button>
        <button data-key="j">J</button>
        <button data-key="k">K</button>
        <button data-key="l">L</button>
      </div>
      <div class="keyboard-bottom">
        <button data-key="enter">ENTER</button>
        <button data-key="a">Z</button>
        <button data-key="s">X</button>
        <button data-key="d">C</button>
        <button data-key="f">V</button>
        <button data-key="g">B</button>
        <button data-key="h">N</button>
        <button data-key="j">M</button>
        <button data-key="backspace">DELETE</button>
      </div>
    </div>
  );
};

export default Keyboard;
