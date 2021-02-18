import React from 'react';
import { render } from '@testing-library/react';
import Resume from '../components/Resume/Resume';

test('Render Resume component', () => {
  const { asFragment } = render(<Resume />);

  expect(asFragment()).toMatchSnapshot();
});