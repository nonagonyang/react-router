import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/Orange">
        Orange
      </NavLink>
      <NavLink exact to="/Squash">
        Squash
      </NavLink>
      <NavLink exact to="/Potato">
        Potato
      </NavLink>
    </nav>
  );
}

export default NavBar;