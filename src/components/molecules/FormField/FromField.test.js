import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  it('renders the component', () => {
    renderWithProviders(<FormField value={''} onChange={() => {}} label="name" name="name" id="name" />);
  });
});
