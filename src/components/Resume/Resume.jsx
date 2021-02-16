import React from 'react';
import { Section, Header, Paragraph, SubHeader } from './Resume.elements';
import strings from '../../common/strings';
import SkillTabs from '../SkillTabs/SkillTabs';
import ResumeHistory from './ResumeHistory/ResumeHistory';

export default function Resume() {
  return (
    <Section>
      <Header>{strings.MY_NAME}</Header>
      <Paragraph>
        {strings.INTRO}
      </Paragraph>
      <SubHeader>{strings.TECHNICAL_SKILLS}</SubHeader>
      <SkillTabs />
      <SubHeader>{strings.HISTORY}</SubHeader>
      <ResumeHistory />
    </Section>
  )
}