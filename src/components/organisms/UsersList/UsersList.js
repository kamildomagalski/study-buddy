import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { GlobalWrapper, GlobalStyledTitle } from 'assets/styles/globalStyle';

function UsersList({ users, setUsers }) {
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <GlobalWrapper>
      <GlobalStyledTitle>Students List</GlobalStyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </GlobalWrapper>
  );
}

export default UsersList;
