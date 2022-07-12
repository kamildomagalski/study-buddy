import React from 'react';
import { GlobalWrapper, GlobalStyledTitle } from 'assets/styles/globalStyle';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

function Form({ formValues, handleAddUser, handleFormChanges }) {
  return (
    <GlobalWrapper as="form" onSubmit={handleAddUser}>
      <GlobalStyledTitle>Add new student</GlobalStyledTitle>
      <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleFormChanges} />
      <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleFormChanges} />
      <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleFormChanges} />
      <Button type="submit">Add</Button>
    </GlobalWrapper>
  );
}

export default Form;
