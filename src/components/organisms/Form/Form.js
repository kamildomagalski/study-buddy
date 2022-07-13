import React from 'react';
import PropTypes from 'prop-types';
import { GlobalWrapper } from 'assets/styles/globalStyle';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';

function Form({ formValues, handleAddUser, handleFormChanges }) {
  return (
    <GlobalWrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleFormChanges} />
      <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleFormChanges} />
      <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleFormChanges} />
      <Button type="submit">Add</Button>
    </GlobalWrapper>
  );
}

Form.propTypes = {
  formValues: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
  handleAddUser: PropTypes.func.isRequired,
  handleFormChanges: PropTypes.func.isRequired,
};

export default Form;
