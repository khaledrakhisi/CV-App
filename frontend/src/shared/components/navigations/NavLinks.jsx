import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          works
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          about
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          notes
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
