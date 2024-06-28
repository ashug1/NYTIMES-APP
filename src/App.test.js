import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders article titles', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NY Times Most Popular Articles/i);
  expect(linkElement).toBeTruthy(); 
});