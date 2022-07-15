import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

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
function AddUser() {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

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
  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm();
    } else {
      handleThrowError('You have to check consent.');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleFormChanges} />
      <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleFormChanges} />
      <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleFormChanges} />
      <FormField label={'Consent'} id={'consent'} name={'consent'} type={'checkbox'} value={formValues.consent} onChange={handleCheckConsent} />
      <Button type="submit">Add</Button>
      {formValues.error && <p>{formValues.error}</p>}
    </ViewWrapper>
  );
}

export default AddUser;
