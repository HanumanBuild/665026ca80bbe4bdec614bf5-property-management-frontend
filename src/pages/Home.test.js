import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('renders Home component', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Welcome to Property Management')).toBeInTheDocument();
  expect(getByText('We offer 24/7, fast service to manage your properties efficiently.')).toBeInTheDocument();
});