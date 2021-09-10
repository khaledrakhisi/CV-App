import React, { useEffect, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import useHttpClient from "../../shared/Hooks/useHttpClient";

import "./About.css";

function About(props) {
  // const [content , setContent] = useState(null);
  let content;

  const { isLoading, errorMessage, sendRequest } = useHttpClient();
  const [resume, setResume] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/resume/`
        );
        setResume(responseData.resume[0]);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);
  // useEffect with [] parameter means run just once.

  if(!isLoading && resume){
    let cntnt = {
      EN:{
        title1: "About me",
        title2: "Contact details",
        download : "Download Resume",
        bio:resume.main.EN.bio,            
      },
      DE:{
        title1: "Über mich",
        title2: "Kontaktdetails",
        download : "Lebenslauf herunterladenn",
        bio:resume.main.DE.bio,            
      }
    }
    // props.language === "EN" ? setContent(cntnt.EN) : setContent(cntnt.DE);
    content = props.language === "EN" ? cntnt.EN : cntnt.DE;
    // console.log(content);
  }

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

      {!isLoading && resume &&(
        <section id="about">
          <div className="row">
            <div className="column1">
              <img
                className="profile-pic"
                src={resume.main.image}
                alt="Tim Baker Profile Pic"
              />
              <br />
              <p>{resume.main.name}</p>                            
            </div>
            <div className="column2">
              <h2>{content.title1}</h2>

              <p>{content.bio}</p>

              {/* <div className="column2"> */}
                <h2>{content.title2}</h2>
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
              {/* </div> */}                        
              <div className="download">
                <a href={resume.main.resumedownload} className="button">
                <i className="fas fa-cloud-download-alt"></i>  {content.download}
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
