import React, { useState } from "react";
import Draggable from "react-draggable";

import "./Note.css";
import { Zoom } from "@material-ui/core";

function Note(props) {
  const [zIndex, setZIndex] = useState(0);

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <React.Fragment>
      <Draggable handle="#note__header">
        <div>
          <Zoom in={true} style={{ transitionDelay: props.displayDelay }}>
            <div
              className="note"
              style={{ zIndex: zIndex }}
              onClick={(e) => {
                setZIndex((prev) => ++prev);
              }}
            >
              <div id="note__header">
                <button onClick={handleClick}>
                  <i className="fas fa-times note__icon"></i>
                </button>
              </div>
              <h1>{props.title}</h1>
              <p>{props.content}</p>
            </div>
          </Zoom>
        </div>
      </Draggable>
    </React.Fragment>
  );
}

export default Note;
