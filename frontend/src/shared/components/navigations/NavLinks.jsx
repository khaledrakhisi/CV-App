import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          My works
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          About me
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          Blog
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
