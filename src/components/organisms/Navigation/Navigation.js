import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'components/Logo/Logo';
import { Wrapper } from './Navigation.styles';
import { StyledNavLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>Study Buddy</Logo>
      <StyledNavLink to="/">Dashboard</StyledNavLink>
      <StyledNavLink to="/add-user">Add user</StyledNavLink>
    </Wrapper>
  );
};

Navigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
export default Navigation;
