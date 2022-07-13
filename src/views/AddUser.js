import React, { useContext, useState } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

function AddUser() {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleFormChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleFormChanges} />
      <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleFormChanges} />
      <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleFormChanges} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
}

export default AddUser;
