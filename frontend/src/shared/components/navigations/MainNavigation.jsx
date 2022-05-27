import React, { useState } from "react";
import { Link } from "react-router-dom";

import FlagDropdown from "../UIElements/FlagDropdown";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Backdrop from "../UIElements/Backdrop";

import "./MainNavigation.css";
import ContextMenu from "../UIElements/ContextMenu";

function MainNavigation(props) {
  const [isContextMenuExpanded, setIsContextMenuExpanded] = useState(false);
  const eh_contextMenuButton = () => {
    setIsContextMenuExpanded((prev) => !prev);
  };

  return (
    <React.Fragment>
      {isContextMenuExpanded && <Backdrop />}
      {isContextMenuExpanded && (
        <ContextMenu onSelect={eh_contextMenuButton}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks language={props.language} />
          </nav>
        </ContextMenu>
      )}

      <MainHeader>
        <button
          className={`main-navigation__menu-btn ${
            isContextMenuExpanded && "open"
          }`}
          onClick={eh_contextMenuButton}
        >
          <span className="first" />
          <span className="second" />
          <span className="third" />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">KHALED</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks language={props.language} />
        </nav>
        <FlagDropdown
          language={props.language}
          onChange={props.onLanguageSelect}
        />
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
