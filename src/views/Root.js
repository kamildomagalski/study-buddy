import React, { useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from 'data/users';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleFormChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/" exact="true">
              Home
            </Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route path="/add-user" element={<Form formValues={formValues} handleAddUser={handleAddUser} handleFormChanges={handleFormChanges} />} />
            <Route path="/" element={<UsersList users={users} setUsers={setUsers} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
