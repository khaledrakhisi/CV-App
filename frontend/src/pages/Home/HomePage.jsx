import React from "react";

import "./HomePage.css";

function HomePage() {
  return (
    <React.Fragment>
      <div className="top_container" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "images/homepage/himmel.png"})`}}>        
        <h1 className="title">I'm khaled</h1>
        <h3 className="title_description">a Software Developer</h3>
        <h3 className="title_like">🤍 1</h3>
        <div className="sonne" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "images/homepage/sonne.png"})`}}></div>
        <img className="wolke1" src={process.env.PUBLIC_URL + "images/homepage/wolke3.png"} alt=""/>        
        <img className="wolke2" src={process.env.PUBLIC_URL + "images/homepage/wolke4.png"} alt=""/>        
        <img className="wolke3" src={process.env.PUBLIC_URL + "images/homepage/wolke3.png"} alt=""/>        
        <hr className="hr_normal" />
      </div>
      <div className="middle_container"  style={{backgroundImage:`url(${process.env.PUBLIC_URL + "images/homepage/Boden.png"})`}}>      
        <img className="azaditurm" src={process.env.PUBLIC_URL + "images/homepage/azadi.png"} alt=""/>
        <img className="brandenburg" src={process.env.PUBLIC_URL + "images/homepage/brandenburg2.png"} alt="" />          
        <img className="baum1" src={process.env.PUBLIC_URL + "images/homepage/baum1.png"} alt="" />
        <img className="baum2" src={process.env.PUBLIC_URL + "images/homepage/baum2.png"} alt="" />        
        {/* <img className="baum3" src={process.env.PUBLIC_URL + "images/homepage/baum3.png"} alt="" /> */}
        <img className="baum4" src={process.env.PUBLIC_URL + "images/homepage/baum2.png"} alt="" />
        <img className="baum5" src={process.env.PUBLIC_URL + "images/homepage/baum4.png"} alt="" />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
