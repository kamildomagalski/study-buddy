import React, { useState, useEffect } from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'error' });
      }
    }, 2000);
  });
};

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // window.addEventListener('mousemove', this.detectMouseMove)
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((error) => console.error(error));

    return () => {
      // here we can remove event listeners or intervals
      // works like componentWillUnmount in class components
      // window.removeEventListener('mousemove', this.detectMouseMove)
    };
  }, []);

  //works like componenDidUpdate in class components
  useEffect(() => {
    console.log('Loading state has changed.');
  }, [isLoading]);

  //detectMouseMove = () => {};

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h2>{isLoading ? 'Loading...' : 'Users List'}</h2>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
