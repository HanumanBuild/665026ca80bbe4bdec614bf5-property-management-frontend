import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactUs from './ContactUs';

test('renders Contact Us component and submits form', () => {
  const { getByText, getByLabelText } = render(<ContactUs />);
  expect(getByText('Contact Us')).toBeInTheDocument();

  fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });
  fireEvent.change(getByLabelText('Message'), { target: { value: 'Hello!' } });

  fireEvent.click(getByText('Submit'));
  expect(getByText('Failed to submit contact form')).toBeInTheDocument();
});