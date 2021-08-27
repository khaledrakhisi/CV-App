import React from "react";
import { createPortal } from "react-dom";

import "./Backdrop.css";

function Backdrop(props) {
  return createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("hook-backdrop")
  );
}

export default Backdrop;
