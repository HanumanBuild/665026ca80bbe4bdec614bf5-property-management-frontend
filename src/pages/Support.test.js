import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Support from './Support';

test('renders Support component', () => {
  const { getByText } = render(<Support />);
  expect(getByText('24/7 Support')).toBeInTheDocument();
  expect(getByText('We are available 24/7 to assist you with any property management needs.')).toBeInTheDocument();
});