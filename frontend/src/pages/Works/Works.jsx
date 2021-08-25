import React from "react";

import WorksList from "./components/WorksList";
import "./Works.css";

const works = [
  {
    name: "Cactus",
    description:
      "An Accounting utility software that provides and calculates complex and repetitive math and accounting calculations...",
    technicalInfo: { language: "C#.net", Platform: "windows", method: "" },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "Paydar sannat shadegan",
    url: "",
  },
  {
    name: "Paradise Game",
    description:
      "A cross-platform andventure 2D game, with pretty pixel graphics and UI.",
    technicalInfo: {
      language: "Unity3d C#.net",
      Platform: "Android, iOS",
      method: "",
    },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "PSJA (self-employed)",
    url: "",
  },
  {
    name: "Health Calendar",
    description: "Beautiful Health Calendar For Domain Clients.",
    technicalInfo: {
      language: "C#.net",
      Platform: "windows Server",
      method: "",
    },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "PSJA (self-employed)",
    url: "",
  },
  {
    name: "Info",
    description:
      "An old MS-DOS File-system program which I wrote it when i was in high school.",
    technicalInfo: { language: "PASCAL", Platform: "MS-DOS", method: "" },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "self-employed",
    url: "",
  },
  {
    name: "Info",
    description:
      "An old MS-DOS File-system program which I wrote it when i was in high school.",
    technicalInfo: { language: "PASCAL", Platform: "MS-DOS", method: "" },
    images: ["https://s.cafebazaar.ir/images/upload/screenshot/com.August.Paradise_IAB-385997903717.jpg", "", ""],
    duration: { start: "", end: "" },
    contractor: "self-employed",
    url: "",
  },
];

function Works() {
    return (
        <WorksList items={works} />
    );
}

export default Works;
