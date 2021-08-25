import React, { useEffect, useReducer } from "react";

import "./Input.css";
import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),        
      };
    case "TOUCH":
      return {
        ...state,
        isTouched : true,
      };
      
    default:
      return state;
  }
};

function Input(props) {

  let initializer = {
    value: props.initialValue || "",//this field is used to binding to the input
    isValid: props.initialValidity || false,
    isTouched: false,
  };  

  const [state, dispatch] = useReducer(inputReducer, initializer);
  
  const {value, isValid} = state;
  const {id, onInput} = props;

  useEffect(()=>{
    if(onInput)
      onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  // console.log(state);

  const eh_input_Change = (event) => {
    let action = { 
      type: "CHANGE", 
      val: event.target.value,
      validators: props.validators,
    };
    dispatch(action);
    // console.log(state);
  };

  const eh_input_blur = () => {
    let action = { 
      type: "TOUCH",
    };
    dispatch(action);
  }

  const element =
    props.type === "text" || props.type === "password"? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={state.value}
        onChange={eh_input_Change}
        onBlur={eh_input_blur}
      />
    ) : (
      <textarea id={props.id} 
      rows={props.rows || 3} 
      value={state.value} 
      onChange={eh_input_Change}
      onBlur={eh_input_blur}
      />
    );

  return (
    <div
      className={`form-control ${props.className} 
      ${!state.isValid && state.isTouched && "form-control--invalid"}`}
    >
      <label htmlFor={element}>{props.label}</label>
      {element}
      {!state.isValid && state.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
