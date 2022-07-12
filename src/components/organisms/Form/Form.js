import React from 'react';
import { StyledTitle, Wrapper } from 'components/organisms/UsersList/UserList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

function Form({ formValues, handleAddUser, handleFormChanges }) {
  return (
    <Wrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleFormChanges} />
      <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleFormChanges} />
      <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleFormChanges} />
      <Button type="submit">Add</Button>
    </Wrapper>
  );
}

export default Form;
