import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = ({ switchTheme, theme }) => {
  return (
    <div className="nav">
      <h1 className="nav-header">Worldle</h1>
      <ul>
        <li className="nav__links">
          <Link to="/">Home</Link>
        </li>
      </ul>

      <div className="toggle">
        <label onClick={switchTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </label>
      </div>
    </div>
  );
};

export default NavBar;
