import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Slider } from "@material-ui/core";

import "./HomePage.css";

function HomePage() {
  return (
    <React.Fragment>
      <div className="top_container">
        {/* <img className="wolke1" src={process.env.PUBLIC_URL + "images/homepage/wolke3.png"} alt=""/> */}
        {/* <div className="slider_season"> */}
          {/* <Slider orientation="vertical" /> */}
        {/* </div> */}
        <h1 className="title">I'm khaled</h1>
        <h3 className="title_description">a Software Developer</h3>
        <h3 className="title_like">🤍 1</h3>
        {/* <img className="wolke2" src={process.env.PUBLIC_URL + "images/homepage/wolke4.png"} alt=""/> */}
        {/* <img className="wolke3" src={process.env.PUBLIC_URL + "images/homepage/wolke3.png"} alt=""/>         */}
        <hr className="hr_normal" />
      </div>
      <div className="middle_container">
      {/* <TransitionGroup> */}
          {/* <CSSTransition in={true} timeout={1000} classNames="slide-in-left">             */}
          {/* </CSSTransition>           */}
      {/* </TransitionGroup> */}
        <img className="azaditurm" src={process.env.PUBLIC_URL + "images/homepage/azadi.png"} alt=""/>
        <img className="brandenburg" src={process.env.PUBLIC_URL + "images/homepage/brandenburg.png"} alt="" />          
        {/* <img className="baum1" src={process.env.PUBLIC_URL + "images/homepage/baum1.png"} alt="" /> */}
        {/* <img className="baum2" src={process.env.PUBLIC_URL + "images/homepage/baum2.png"} alt="" /> */}
        {/* <img className="baum3" src={process.env.PUBLIC_URL + "images/homepage/baum3.png"} alt="" /> */}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
