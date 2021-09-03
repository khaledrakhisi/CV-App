import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {

  let content = {
    EN:{
      item1:"works",
      item2:"about",
      item3:"fun",
      item4:"notes",
    },
    DE:{
      item1:"werke",
      item2:"über",
      item3:"spaß",
      item4:"notizen",
    }
  }
  content = props.language === "EN" ? content.EN : content.DE;

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/works" exact>
          {content.item1}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" exact>
          {content.item2}
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" exact>
          {content.item3}
        </NavLink>
      </li>
      <li>
        <NavLink to="/notes" exact>
          {content.item4}
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
