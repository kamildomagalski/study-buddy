import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';

describe('AddUser', () => {
  it('renders the component', async () => {
    renderWithProviders(<AddUser />);
  });

  it('should add new student', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    const mockStudent = {
      name: 'Kamil',
      attendance: '65%',
      average: '4.5',
    };
    fireEvent.change(screen.getByTestId('Name'), { target: { value: mockStudent.name } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: mockStudent.attendance } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: mockStudent.average } });
    fireEvent.click(screen.getByText('Add'));
    screen.getAllByText(mockStudent.name);
  });
});
