import React from "react";
import "../styles/Keyboard.css";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard-top">
        <button className="keyboard-button" data-key="q">
          q
        </button>
        <button className="keyboard-button" data-key="w">
          w
        </button>
        <button className="keyboard-button" data-key="e">
          e
        </button>
        <button className="keyboard-button" data-key="r">
          r
        </button>
        <button className="keyboard-button" data-key="t">
          t
        </button>
        <button className="keyboard-button" data-key="y">
          y
        </button>
        <button className="keyboard-button" data-key="u">
          u
        </button>
        <button className="keyboard-button" data-key="i">
          i
        </button>
        <button className="keyboard-button" data-key="o">
          o
        </button>
        <button className="keyboard-button" data-key="p">
          p
        </button>
      </div>
      <div className="keyboard-middle">
        <button className="keyboard-button" data-key="a">
          a
        </button>
        <button className="keyboard-button" data-key="s">
          s
        </button>
        <button className="keyboard-button" data-key="d">
          d
        </button>
        <button className="keyboard-button" data-key="f">
          f
        </button>
        <button className="keyboard-button" data-key="g">
          g
        </button>
        <button className="keyboard-button" data-key="h">
          h
        </button>
        <button className="keyboard-button" data-key="j">
          j
        </button>
        <button className="keyboard-button" data-key="k">
          k
        </button>
        <button className="keyboard-button" data-key="l">
          l
        </button>
      </div>
      <div className="keyboard-bottom">
        <button data-key="enter" className="keyboard-button">
          ⏎
        </button>
        <button className="keyboard-button" data-key="z">
          z
        </button>
        <button className="keyboard-button" data-key="x">
          x
        </button>
        <button className="keyboard-button" data-key="c">
          c
        </button>
        <button className="keyboard-button" data-key="v">
          v
        </button>
        <button className="keyboard-button" data-key="b">
          b
        </button>
        <button className="keyboard-button" data-key="n">
          n
        </button>
        <button className="keyboard-button" data-key="m">
          m
        </button>
        <button data-key="backspace" className="keyboard-button">
          ⇦
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
