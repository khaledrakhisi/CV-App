import React from "react";
import {Link} from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';

import "./Footer.css";

function Footer() {
  return (
    <div class="bottom_container">
      <h1 className="footer_icons">
        <Link to="/">
          <InstagramIcon className="instagram_icon" />
        </Link>
      </h1>
      <h1 className="footer_icons">
        <Link to="/">
          <YouTubeIcon className="youtube_icon" />
        </Link>
      </h1>
      <h1 className="footer_icons">
        <Link to="/">
          <MailIcon className="mail_icon" />
        </Link>
      </h1>
      <p className="copyrighttext">Copyright © 2021 Khaled Rakhisi</p>
    </div>
  );
}

export default Footer;