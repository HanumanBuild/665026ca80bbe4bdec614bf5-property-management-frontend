import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from './AboutUs';

test('renders About Us component', () => {
  const { getByText } = render(<AboutUs />);
  expect(getByText('About Us')).toBeInTheDocument();
  expect(getByText('We are a professional property management company dedicated to providing top-notch services.')).toBeInTheDocument();
});