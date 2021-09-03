import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  // console.log(action.inputId);
  switch (action.type) {
    case "INPUT_CHANGE":
      let b_isFormValid = action.isValid;
      for (var input in state.inputElements) {
        if (!state.inputElements[input]) continue;
        if (input === action.inputId) {
          b_isFormValid = b_isFormValid && action.isValid;
        } else {
          b_isFormValid = b_isFormValid && state.inputElements[input].isValid;
        }
      }
      let newState = {
        ...state,
        inputElements: {
          ...state.inputElements,
          //override input object
          //remeber: the spread (...) operator does not add the {} into the object
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid: b_isFormValid,
      };
      // console.log(newState.isFormValid);
      return newState;

    case "SET_DATA":
      // console.log(action.inputs);
      return {
        ...state,
        inputElements: action.inputs,
        isFormValid: action.isValid,
      };

    default:
      return state;
  }
};

function useFormValidity(inputElements, initialValidity) {
  const [inputState, dispatch] = useReducer(formReducer, {
    inputElements: inputElements,
    isFormValid: initialValidity,
  });

  const eh_input = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value: value,
      isValid: isValid,
    });
    // console.log("value: ", value);
  }, []);

  const setFormData = useCallback((inputs, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputs,
      isValid: formValidity,
    });
    // console.log("value: ", value);
  }, []);

  return [inputState, eh_input, setFormData];
}

export default useFormValidity;
