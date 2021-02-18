import React from 'react';
import { render } from '@testing-library/react';
import SkillTabs from '../components/SkillTabs/SkillTabs';

test('Render SkillTabs component', () => {
  const { asFragment } = render(<SkillTabs />);

  expect(asFragment()).toMatchSnapshot();
});