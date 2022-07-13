import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

function AddUser({ formValues, handleAddUser, handleFormChanges }) {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleFormChanges} />
      <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleFormChanges} />
      <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleFormChanges} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
}

AddUser.propTypes = {
  formValues: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
  handleAddUser: PropTypes.func.isRequired,
  handleFormChanges: PropTypes.func.isRequired,
};

export default AddUser;
