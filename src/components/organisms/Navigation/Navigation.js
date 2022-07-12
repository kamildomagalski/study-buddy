import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'components/Logo/Logo';
import { Wrapper } from './Navigation.styles';

const Navigation = ({ children }) => {
  return (
    <Wrapper as="ul">
      <Logo>Study Buddy</Logo>
      {children}
    </Wrapper>
  );
};

Navigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
export default Navigation;
