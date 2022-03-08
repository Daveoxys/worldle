import React from "react";
// import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="nav-header">Worldle</h1>
      {/* <ul className="nav__links">
        <li>
          <Link to="/" className="nav__links-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/word-game" className="nav__links-link">
            Word Game
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default NavBar;
