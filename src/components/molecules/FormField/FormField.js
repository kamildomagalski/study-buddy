import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input.styles';
import { Label } from 'components/atoms/Label/Label.styles';

const FormField = ({ value, onChange, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange}></Input>
    </Wrapper>
  );
};

FormField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default FormField;
