import React from "react";
import ReactDOM from "react-dom";

import "./ContextMenu.css";

function ContextMenu(props) {
  const content = <React.Fragment>
      <aside className="side-drawer" onClick={props.onSelect}>{props.children}</aside>
  </React.Fragment>;

  return ReactDOM.createPortal(
    content,
    document.getElementById("hook-contextMenu")
  );
}

export default ContextMenu;
