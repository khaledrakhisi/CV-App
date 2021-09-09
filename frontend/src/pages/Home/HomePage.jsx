import React, { useEffect, useState } from "react";

// import axios from "axios";
import { Zoom } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";

import useHttpClient from "../../shared/Hooks/useHttpClient";

import "./HomePage.css";

function HomePage(props) {
  let content = {
    EN: {
      title: "I'm khaled",
      description: "a software developer",
    },
    DE: {
      title: "Ich bin Khaled",
      description: "ein Software Entwickler",
    },
  };
  content = props.language === "EN" ? content.EN : content.DE;

  const [clientPublicIP, setClientPublicIP] = useState();
  const { isLoading, sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("https://geolocation-db.com/json/");
        const response = await sendRequest("https://geolocation-db.com/json/");
        console.log(response.IPv4);
        setClientPublicIP(response.IPv4);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  if(!isLoading && clientPublicIP){

  }

  return (
    <React.Fragment>
      <div
        className="top_container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "images/homepage/himmel.png"
          })`,
        }}
      >
        <h1 className="title">{content.title}</h1>
        <h3 className="title_description">{content.description}</h3>
        <Zoom in={true}>
          {/* <Fab aria-label="like">
            <FavoriteIcon color="secondary" />
          </Fab> */}

          <h3 className="title_like">
            <i className="fas fa-heart"></i>
            <span>1</span>
          </h3>
        </Zoom>
        <div
          className="sonne"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "images/homepage/sonne.png"
            })`,
          }}
        ></div>
        <img
          className="wolke1"
          src={process.env.PUBLIC_URL + "images/homepage/wolke3.png"}
          alt=""
        />
        <img
          className="wolke2"
          src={process.env.PUBLIC_URL + "images/homepage/wolke4.png"}
          alt=""
        />
        <img
          className="wolke3"
          src={process.env.PUBLIC_URL + "images/homepage/wolke3.png"}
          alt=""
        />
        <hr className="hr_normal" />
      </div>
      <div
        className="middle_container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "images/homepage/Boden.png"
          })`,
        }}
      >
        <img
          className="azaditurm"
          src={process.env.PUBLIC_URL + "images/homepage/azadi.png"}
          alt=""
        />
        <img
          className="brandenburg"
          src={process.env.PUBLIC_URL + "images/homepage/brandenburg2.png"}
          alt=""
        />
        <Collapse in={true} style={{ transitionDelay: "2s" }}>
          <img
            className="baum1"
            src={process.env.PUBLIC_URL + "images/homepage/baum1.png"}
            alt=""
          />
        </Collapse>
        <Collapse in={true} style={{ transitionDelay: "1s" }}>
          <img
            className="baum2"
            src={process.env.PUBLIC_URL + "images/homepage/baum2.png"}
            alt=""
          />
        </Collapse>
        <Collapse in={true} style={{ transitionDelay: "3s" }}>
          <img
            className="baum4"
            src={process.env.PUBLIC_URL + "images/homepage/baum2.png"}
            alt=""
          />
        </Collapse>
        <img
          className="baum5"
          src={process.env.PUBLIC_URL + "images/homepage/baum4.png"}
          alt=""
        />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
