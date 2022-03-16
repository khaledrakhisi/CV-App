import React, { useEffect, useState } from "react";

import TextureBG from "../../shared/components/UIElements/TextureBG";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import useHttpClient from "../../shared/Hooks/useHttpClient";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import "./Notes.css";

function Notes(props) {
  const ITEM_DISPLAY_DELAY = 200;

  const [notes, setNotes] = useState([]);
  const { isLoading, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/notes`
        );

        setNotes(responseData.notes);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      console.log(prevNotes);
      return [...prevNotes, newNote];
    });    
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }  

  return (
    <React.Fragment>
      <TextureBG bg="bg__dimension" />

      <div id="notes">
        <CreateArea language={props.language} onAdd={addNote} />
        {!isLoading &&
          notes &&
          notes.map((noteItem, i) => {
            return (
              <Note
                language={props.language}
                key={i}
                id={i}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                displayDelay={ITEM_DISPLAY_DELAY * i}
              />
            );
          })}

        {isLoading && (
          <div className="center">            
            <LoadingSpinner />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Notes;
