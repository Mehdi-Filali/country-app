import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>about</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
