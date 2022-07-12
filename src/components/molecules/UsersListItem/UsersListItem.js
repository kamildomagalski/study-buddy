import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js';
import { Wrapper, StyledInfoWrapper, StyledGrade } from './UserListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledGrade value={average}>{average}</StyledGrade>
      <StyledInfoWrapper>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfoWrapper>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  deleteUser: PropTypes.func,
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
