import React from 'react';
import { render } from '@testing-library/react';
import Education from '../components/Education/Education';

test('Render Education component', () => {
  const { asFragment } = render(<Education />);

  expect(asFragment()).toMatchSnapshot();
});