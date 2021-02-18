import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

test('Render NavBar component', () => {
  const { asFragment } = render(<NavBar />);

  expect(asFragment()).toMatchSnapshot();
});