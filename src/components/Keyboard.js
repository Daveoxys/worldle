import React from "react";
import "../styles/Keyboard.css";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div class="keyboard-top">
        <button data-key="q">q</button>
        <button data-key="w">w</button>
        <button data-key="e">e</button>
        <button data-key="r">r</button>
        <button data-key="t">t</button>
        <button data-key="y">y</button>
        <button data-key="u">u</button>
        <button data-key="i">i</button>
        <button data-key="o">o</button>
        <button data-key="p">p</button>
      </div>
      <div class="keyboard-middle">
        <button data-key="a">a</button>
        <button data-key="s">s</button>
        <button data-key="d">d</button>
        <button data-key="f">f</button>
        <button data-key="g">g</button>
        <button data-key="h">h</button>
        <button data-key="j">j</button>
        <button data-key="k">k</button>
        <button data-key="l">l</button>
      </div>
      <div class="keyboard-bottom">
        <button data-key="enter" class="big-button">
          ent
        </button>
        <button data-key="a">z</button>
        <button data-key="s">x</button>
        <button data-key="d">C</button>
        <button data-key="f">V</button>
        <button data-key="g">b</button>
        <button data-key="h">n</button>
        <button data-key="j">m</button>
        <button data-key="backspace" class="big-button">
          del
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
