import React from "react";
import { Link } from "react-router-dom";

import FlagDropdown from "../UIElements/FlagDropdown";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import './MainNavigation.css';

function MainNavigation(props) {
  return (
    <React.Fragment>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">KHALED</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks language={props.language}/>
        </nav>
        <FlagDropdown language={props.language} onChange={props.onLanguageSelect}/>

      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
