import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => `-2px 4px 10px 0px ${theme.colors.shadowGrey}`};
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
function UsersList() {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default UsersList;
