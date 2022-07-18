import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

function AddUser() {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleFormChanges, handleClearForm, handleCheckConsent, handleThrowError } = useForm(initialFormState);

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
