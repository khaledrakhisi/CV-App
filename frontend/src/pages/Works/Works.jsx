import React, { useEffect, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import useHttpClient from "../../shared/Hooks/useHttpClient";
import WorksList from "./components/WorksList";

import "./Works.css";

// const works = [
//   {
//     id:"0",
//     title: "Cactus",
//     description:
//       "An Accounting utility software (Absolute Accounting version) that provides and calculates complex and repetitive math and accounting calculations.",
//     technicalInfo: { language: "C#.net", platform: "windows", method: "" },
//     images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
//     duration: { start: "2009-03-18", end: "2010-03-26" },
//     contractor: "Paydar san'at shadegan GmbH",
//     links: "",
//     tags: "#Csharp #.net #project #visualstudio #development"
//   },
//   {
//     id:"1",
//     title : "Paradise Game",
//     description:
//       "A cross-platform andventure 2D game, with pretty pixel graphics and UI.",
//     technicalInfo: {
//       language: "Unity3d C#.net",
//       platform: "Android, iOS",
//       method: "",
//     },
//     images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
//     duration: { start: "2017-05-05", end: "2019-09-20" },
//     contractor: "PSJA GmbH (self-employed)",
//     links: "",
//     tags: "#Csharp #unity3d #development"
//   },
//   {
//     id:"2",
//     title: "Health Calendar",
//     description: "Beautiful Health Calendar For Domain Clients.",
//     technicalInfo: {
//       language: "C#.net",
//       platform: "windows Server",
//       method: "",
//     },
//     images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
//     duration: { start: "2017-09-17", end: "2018-12-26" },
//     contractor: "PSJA GmbH (self-employed)",
//     links: "",
//     tags: "#Csharp #.net #project #visualstudio #development"
//   },
//   {
//     id:"3",
//     title: "Info",
//     description:
//       "An old MS-DOS File-system program which I wrote it when i was in high school.",
//     technicalInfo: { language: "PASCAL", platform: "MS-DOS", method: "" },
//     images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
//     duration: { start: "2006-01-01", end: "2006-05-01" },
//     contractor: "independently",
//     links: "",
//     tags: "#Pascal #c++ #highschool #project"
//   },
//   {
//     id:"4",
//     title: "Grace",
//     description:
//       "Grace upon us! with grace command-line you can control and monitor the entire domain clients and servers easily.",
//     technicalInfo: { language: "PASCAL", platform: "MS-DOS", method: "" },
//     images: ["/frontend/src/pages/Works/assets/grace.png", "", ""],
//     duration: { start: "2019-12-26", end: "2020-05-24" },
//     contractor: "PSJA GmbH (self-employed)",
//     links: "",
//     tags: "#Csharp #.net #domain #winserver #visualstudio"
//   },
//   {
//     id:"5",
//     title: "VAGCO Website",
//     description:
//       "When I was working at VAGCO, My boss asked me to create and publish a website within a month, and so I did. Surprisingly I Created and published an entire ASP.NET website within a month or less!",
//     technicalInfo: { language: "ASP.NET/C#", platform: "WEB", method: "" },
//     images: ["/frontend/src/pages/Works/assets/grace.png", "", ""],
//     duration: { start: "2013-04-01", end: "2013-05-01" },
//     contractor: "VAGCO GmbH",
//     links: "https://www.vagco.ir",
//     tags: "#Asp.net #csharp #webdevelopment"
//   },
//   {
//     id:"6",
//     title: "Novin",
//     description:
//       "An Accounting utility software (Stores Version) that provides and calculates complex and repetitive math and accounting calculations.",
//     technicalInfo: { language: "C#.net", platform: "windows", method: "" },
//     images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
//     duration: { start: "2011-05-18", end: "2012-08-13" },
//     contractor: "Paydar san'at shadegan GmbH",
//     links: "",
//     tags: "#Csharp #.net #project #visualstudio #development"
//   },
// ];

function Works() {
  const { isLoading, errorMessage, sendRequest, clearError } = useHttpClient();
  const [works, setWorks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(userId);
        const responseData = await sendRequest(
          `http://localhost:5000/api/works/`
        );
        // console.log(responseData);
        setWorks(responseData.works);
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
      {!isLoading && works && <WorksList items={works} />}
    </React.Fragment>
  );
}

export default Works;
