import React, { useState } from "react";

import moment from "moment";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { createStyles, Grow, makeStyles } from "@material-ui/core";

import useHttpClient from "../../../shared/Hooks/useHttpClient";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import "./CreateArea.css";

const useStyles = makeStyles(() =>
  createStyles({
    rotateIcon: {
      // transition: "transform .5s ease"
    },
    button: {
      "&:hover": {
        animation: "spin .5s ease 1",
      },
    },
  })
);

function CreateArea(props) {
  const { isLoading, errorMessage, sendRequest, clearError } = useHttpClient();
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    userId: "",
    title: "",
    content: "",
    created_date: "",
  });

  // language actions
  let content = {
    EN: {
      title: "Title",
      textarea: "Leave a note here, forever...",
    },
    DE: {
      title: "Titel",
      textarea: "Hinterlasse hier eine Notiz, für immer...",
    },
  };
  content = props.language === "EN" ? content.EN : content.DE;

  const classes = useStyles();

  function eh_inputChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        userId: "888",
        created_date: moment().format("YYYY-MM-DD"),
        [name]: value,
      };
    });
  }

  async function eh_submitNote(event) {
    event.preventDefault();

    console.log(note);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/notes`,
        "POST",
        JSON.stringify({
          title: note.title,
          content: note.content,
          created_date: note.created_date,
          userId: note.userId,
        }),
        { "Content-Type": "Application/json" }
      );

      props.onAdd(note);
    } catch (err) {}

    // clearing controls for next use
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <ErrorModal
        errorMessage={errorMessage}
        onClose={clearError}
        language={props.language}
      />

      <Grow in={true} style={{ transitionDelay: "300ms" }}>
        <form className="create-note">
          {isLoading && <LoadingSpinner asOverlay />}

          {isExpanded && (
            <Zoom in={isExpanded}>
              <input
                id="title"
                name="title"
                onChange={eh_inputChange}
                value={note.title}
                placeholder={content.title}
              />
            </Zoom>
          )}

          <textarea
            name="content"
            onClick={expand}
            onChange={eh_inputChange}
            value={note.content}
            placeholder={content.textarea}
            rows={isExpanded ? 3 : 1}
          />
          <Zoom in={isExpanded}>
            <Fab color="primary" aria-label="add" onClick={eh_submitNote}>
              <AddIcon className={classes.button} />
            </Fab>
          </Zoom>
        </form>
      </Grow>
    </div>
  );
}

export default CreateArea;
