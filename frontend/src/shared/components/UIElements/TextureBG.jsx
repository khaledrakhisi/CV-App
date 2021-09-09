import React from "react";
import { createPortal } from "react-dom";

import "./TextureBG.css";

function TextureBG(props) {
  return createPortal(
    <div id="texture-bg" className={props.bg}></div>, document.getElementById("hook-texturebg")
  );
}

export default TextureBG;
