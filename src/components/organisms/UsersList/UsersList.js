import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';
import { UsersContext } from 'providers/UsersProvider';

function UsersList() {
  const { users } = useContext(UsersContext);

  return (
    <>
      <StyledTitle>Students List</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
}

export default UsersList;
