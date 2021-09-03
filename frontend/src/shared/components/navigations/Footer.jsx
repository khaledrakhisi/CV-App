import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="bottom_container">
      <ul className="social_icons">
        <li>
          <a className="social_icon" href="#">
            <i className={"fab fa-instagram fa-2x instagram_icon"}></i>
          </a>
        </li>
        <li>
          <a className="social_icon" href="#">
            <i className="fab fa-linkedin fa-2x linkedin_icon"></i>
          </a>
        </li>
        <li>
          <a className="social_icon" href="#">
            <i className="fab fa-github fa-2x github_icon"></i>
          </a>
        </li>
        <li>
          <a className="social_icon" href="#">
          <i className="fab fa-youtube fa-2x youtube_icon"></i>
          </a>
        </li>
        <li>
          <a className="social_icon" href="#">
          <i className="fas fa-envelope-open-text fa-2x mail_icon"></i>
          </a>
        </li>
      </ul>
      <p className="copyrighttext">Copyright © 2021 Khaled Rakhisi</p>
    </div>
  );
}

export default Footer;
