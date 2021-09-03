import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import GetAppTwoToneIcon from "@material-ui/icons/GetAppTwoTone";

import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import useHttpClient from "../../shared/Hooks/useHttpClient";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import MailIcon from "@material-ui/icons/Mail";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";

import "./About.css";

function About() {
  const { isLoading, errorMessage, sendRequest, clearError } = useHttpClient();
  const [resume, setResume] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/resume/`
        );
        setResume(responseData.resume[0]);
        console.log(responseData.resume[0].main.social);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);
  // useEffect with [] parameter means run just once.

  if (!!errorMessage) {
    return (
      <div className="center">
        <Card>
          {" "}
          <h3>{errorMessage} </h3>{" "}
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          {" "}
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && resume && (
        <section id="about">
          <div className="row">
            <div className="column1 hidden">
              <img
                className="profile-pic"
                src={resume.main.image}
                alt="Tim Baker Profile Pic"
              />
            </div>
            <div className="column2">
              <h2>About Me</h2>

              <p>{resume.main.bio}</p>

              <div className="column2">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resume.main.name}</span>
                  <br />
                  <span>
                    {resume.main.address.street} {resume.main.address.city}{" "}
                    {resume.main.address.state}, {resume.main.address.zip}
                  </span>
                  <br />
                  <span>{resume.main.phone}</span>
                  <br />
                  <span>{resume.main.email}</span>
                </p>

                <br />
                <ul className="social_icons">
                  {resume.main.social.map((item, i) => {
                    return (
                      <li key={i}>
                        <a className="social_icon" href={item.url}>
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <br />
              <div className="download">
                <a href={resume.main.resumedownload} className="button">
                  <GetAppTwoToneIcon /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default About;
