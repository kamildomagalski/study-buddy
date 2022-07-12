import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './NavLink.style';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ children, ...props }) => {
  return (
    <Wrapper as="li">
      <NavLink {...props}>{children}</NavLink>
    </Wrapper>
  );
};

NavigationLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.string,
};

export default NavigationLink;
