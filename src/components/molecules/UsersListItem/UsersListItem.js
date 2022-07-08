import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button.js';
import { Wrapper, StyledInfoWrapper, StyledGrade } from './UserListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledGrade value={average}>{average}</StyledGrade>
      <StyledInfoWrapper>
        <p>
          {name}
          <Button />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfoWrapper>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
