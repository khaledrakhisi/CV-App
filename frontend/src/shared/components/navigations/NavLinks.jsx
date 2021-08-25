import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/works" exact>
          works
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" exact>
          about
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" exact>
          blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/notes" exact>
          notes
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
