import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearForm: 'CLEAR FORM',
  toggleConsent: 'TOGGLE CONSENT',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case actionTypes.clearForm:
      return action.payload.initialFormState;
    case actionTypes.toggleConsent:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.payload.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialFormState) => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  const handleFormChanges = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      payload: {
        name: [e.target.name],
        value: [e.target.value],
      },
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearForm, payload: { initialFormState } });
  };

  const handleCheckConsent = () => {
    dispatch({ type: actionTypes.toggleConsent });
  };

  const handleThrowError = (errorValue) => {
    dispatch({ type: actionTypes.throwError, payload: { errorValue } });
  };

  return { formValues, handleFormChanges, handleClearForm, handleCheckConsent, handleThrowError };
};
