import React from "react";
import ReactDOM from "react-dom";

// import { makeStyles } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
// import Draggable from "react-draggable";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// import { yellow } from "@material-ui/core/colors";

import "./Modal.css";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {

  const content = (  
    // <Draggable handle="#handle">
    // <div className="modalform">
      <div className={`modal ${props.className}`} style={props.style}>
      
        <header id="handle" className={`modal__header ${props.headerClass}`}>
          <div className="modal__header-closebutton">
            <HighlightOffIcon className="close_icon" onClick={props.onCancel}/>
          </div>
          <h2>{props.header}</h2>
        </header>

        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          }
        >
          <div className={`modal__content ${props.className}`}>
            {props.children}
          </div>
          <div className={`modal__footer ${props.className}`}>
            {props.footer}
          </div>
        </form>
      </div>  
    //   </div>
    //  </Draggable>    
  );

  return ReactDOM.createPortal(content, document.getElementById("hook-modal"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"        
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
