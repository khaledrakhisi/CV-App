import React, { useEffect, useState } from "react";
import moment from "moment";
import momentTZ from "moment-timezone";
import { Zoom } from "@material-ui/core";

import useHttpClient from "../../shared/Hooks/useHttpClient";
import Tooltip from "../../shared/components/UIElements/Tooltip";

import "./HomePage.css";

function HomePage(props) {
  let content = {
    EN: {
      title: "I'm khaled",
      description: "a software developer",
      tooltip1: "Azadi Tower, Tehran-Iran",
      tooltip2: "Brandenburg Gate, Berlin-Germany",
    },
    DE: {
      title: "Ich bin Khaled",
      description: "ein Software Entwickler",
      tooltip1: "Azadi Turm, Teheran-Iran",
      tooltip2: "Brandenburg Tor, Berlin-Deutschland",
    },
  };
  content = props.language === "EN" ? content.EN : content.DE;

  const home_page_post_id = "613a817ffcb8d050e3828120";
  const { isLoading, sendRequest } = useHttpClient();
  const [clientInfo, setClientInfo] = useState();
  const [likesTotal, setLikesTotal] = useState();
  const [timeIRS, setTimeIRS] = useState("00:00:00 AM");
  const [timeCET, setTimeCET] = useState("00:00:00 AM");

  momentTZ().add("Asia/Tehran|Iran");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeIRS(
        moment(momentTZ().tz("Asia/Tehran|Iran")).format("hh:mm:ss A")
      );
      setTimeCET(moment(momentTZ().tz("Europe/Berlin")).format("hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest("https://geolocation-db.com/json/");
        setClientInfo(response);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  if (!isLoading && clientInfo) {
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/ratings/${home_page_post_id}`
        );
        setLikesTotal(response.ratings.length);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  const eh_like_click = async (event) => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/ratings`,
        "POST",
        JSON.stringify({
          IPv4: clientInfo.IPv4,
          IPv6: "",
          comment: "",
          city: clientInfo.city || "",
          country_code: clientInfo.country_code || "", //"IR"
          country_name: clientInfo.country_name || "", //"Iran"
          latitude: clientInfo.latitude || "", //35.6961,
          longitude: clientInfo.longitude || "", //51.4231,
          postal: clientInfo.postal || "",
          state: clientInfo.state || "", //null,
          rating_type: "like", // "like"
          created_date: moment().format("YYYY-MM-DD"),
          modified_date: moment().format("YYYY-MM-DD"),
          postId: home_page_post_id,
        }),
        { "Content-Type": "Application/json" }
      );
      setLikesTotal((prev) => (prev || 0) + 1);
    } catch (err) {}
  };

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
        <div
          className={`title_like zoom ${likesTotal && "is_liked"}`}
          onClick={eh_like_click}
        >
          <i className={`fas fa-heart ${likesTotal && "fa-2x"}`}></i>
          <span>{likesTotal && likesTotal}</span>
        </div>
        <div
          className="sonne"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/homepage/sonne.png"
            })`,
          }}
        ></div>
        <img
          className="wolke1"
          src={process.env.PUBLIC_URL + "/images/homepage/wolke3.png"}
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
        <div className="lands">
          <div className="land">
            <img
              className="baum2"
              src={process.env.PUBLIC_URL + "images/homepage/baum2.png"}
              alt=""
            />
            <img
              className="baum5"
              src={process.env.PUBLIC_URL + "images/homepage/baum4.png"}
              alt=""
            />
            <div className="azaditurm">
              <Tooltip left={10} width={130} renderDelay={6} bulbOffset={100}>
                <span
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {content.tooltip1.substring(0, content.tooltip1.indexOf(","))}
                </span>
                {content.tooltip1.substring(content.tooltip1.indexOf(","))}
              </Tooltip>

              <img
                src={process.env.PUBLIC_URL + "images/homepage/azadi.png"}
                alt="Azadi tower cannot be loaded"
              />
              <Zoom in={true}>
                <div className="time">
                  <span className="time-clock"> {timeIRS} </span>
                </div>
              </Zoom>
            </div>
          </div>
          {/* <div className="land">
            <img
              className="baum1"
              src={process.env.PUBLIC_URL + "images/homepage/baum1.png"}
              alt=""
            />

            <div className="brandenburg">
              <Tooltip right={0} bulbOffset={10} width={150} renderDelay={10}>
                <span
                  style={{
                    color: "brown",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {content.tooltip2.substring(0, content.tooltip2.indexOf(","))}
                </span>
                {content.tooltip2.substring(content.tooltip2.indexOf(","))}
              </Tooltip>

              <img
                src={
                  process.env.PUBLIC_URL + "images/homepage/brandenburg2.png"
                }
                alt="brandenburg gate cannot be loaded"
              />
              <Zoom in={true}>
                <div className="time">
                  <span className="time-clock"> {timeCET} </span>
                </div>
              </Zoom>
            </div>            
            <img
              className="baum4"
              src={process.env.PUBLIC_URL + "images/homepage/baum2.png"}
              alt=""
            />            
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
