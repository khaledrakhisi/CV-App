import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import './MainNavigation.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';

function MainNavigation() {
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
          <NavLinks />
        </nav>
        <h1 className="main-navigation__contact">
          <Link to="/"><InstagramIcon className="instagram_icon"/></Link>
        </h1>
        <h1 className="main-navigation__contact">
          <Link to="/"><YouTubeIcon className="youtube_icon"/></Link>
        </h1>
        <h1 className="main-navigation__contact">
          <Link to="/"><MailIcon className="mail_icon"/></Link>
        </h1>                  
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
