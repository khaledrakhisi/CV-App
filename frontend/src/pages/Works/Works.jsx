import React from "react";

import WorksList from "./components/WorksList";
import "./Works.css";

const works = [
  {
    id:"0",
    title: "Cactus",
    description:
      "An Accounting utility software that provides and calculates complex and repetitive math and accounting calculations.",
    technicalInfo: { language: "C#.net", platform: "windows", method: "" },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: ""},
    contractor: "Paydar sannat shadegan",
    url: "...",
    tags: "#Csharp #.net #project #visualstudio #development"
  },
  {
    id:"1",
    title : "Paradise Game",
    description:
      "A cross-platform andventure 2D game, with pretty pixel graphics and UI.",
    technicalInfo: {
      language: "Unity3d C#.net",
      platform: "Android, iOS",
      method: "",
    },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "PSJA (self-employed)",
    url: "...",
    tags: "#Csharp #unity3d #development"
  },
  {
    id:"2",
    title: "Health Calendar",
    description: "Beautiful Health Calendar For Domain Clients.",
    technicalInfo: {
      language: "C#.net",
      platform: "windows Server",
      method: "",
    },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "PSJA (self-employed)",
    url: "...",
    tags: "#Csharp #.net #project #visualstudio #development"
  },
  {
    id:"3",
    title: "Info",
    description:
      "An old MS-DOS File-system program which I wrote it when i was in high school.",
    technicalInfo: { language: "PASCAL", platform: "MS-DOS", method: "" },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "self-employed",
    url: "...",
    tags: "#Pascal #c++ #highschool #project"
  },
  {
    id:"4",
    title: "Grace",
    description:
      "Grace upon us! with grace command-line you can control and monitor the entire domain clients and servers easily.",
    technicalInfo: { language: "PASCAL", platform: "MS-DOS", method: "" },
    images: ["/frontend/src/pages/Works/assets/grace.png", "", ""],
    duration: { start: "", end: "" },
    contractor: "self-employed",
    url: "...",
    tags: "#Csharp #.net #domain #winserver #visualstudio"
  },
  {
    id:"5",
    title: "VAGCO Website",
    description:
      "When I was working at VAGCO, My boss asked me to create and publish a website within a month, and so I did. Surprisingly I Created and published an entire ASP.NET website within a month or less!",
    technicalInfo: { language: "ASP.NET/C#", platform: "WEB", method: "" },
    images: ["/frontend/src/pages/Works/assets/grace.png", "", ""],
    duration: { start: "", end: "" },
    contractor: "VAGCO GmbH",
    url: "https://www.vagco.ir",
    tags: "#Asp.net #csharp #webdevelopment"
  },
];

function Works() {
    return (
        <WorksList items={works} />
    );
}

export default Works;
