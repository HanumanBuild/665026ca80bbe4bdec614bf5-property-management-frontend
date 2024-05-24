import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Services from './Services';

test('renders Services component', () => {
  const { getByText } = render(<Services />);
  expect(getByText('Our Services')).toBeInTheDocument();
  expect(getByText('Property Maintenance')).toBeInTheDocument();
  expect(getByText('Tenant Management')).toBeInTheDocument();
  expect(getByText('Financial Reporting')).toBeInTheDocument();
});