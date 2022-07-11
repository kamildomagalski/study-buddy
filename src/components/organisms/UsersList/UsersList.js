import React from 'react';
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

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    // window.addEventListener('mousemove', this.detectMouseMove)
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .catch((error) => console.error(error));
  }
  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed.');
    }
  }
  componentWillUnmount() {
    // here we can remove event listeners or intervals
    // window.removeEventListener('mousemove', this.detectMouseMove)
  }
  detectMouseMove = () => {};
  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h2>{this.state.isLoading ? 'Loading...' : 'Users List'}</h2>
        <StyledList>
          {this.state.users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} deleteUser={this.deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
