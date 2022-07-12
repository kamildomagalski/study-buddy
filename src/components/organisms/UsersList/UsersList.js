import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UserList.styles';
import { GlobalWrapper } from 'assets/styles/globalStyle';

function UsersList({ users, setUsers }) {
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <GlobalWrapper>
      <StyledTitle>Students List</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </GlobalWrapper>
  );
}

export default UsersList;
