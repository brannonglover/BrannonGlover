import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../components/Menu/Menu';

test('Render Menu component', () => {
  const { asFragment } = render(<Menu />);

  expect(asFragment()).toMatchSnapshot();
});