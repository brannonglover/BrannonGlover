import React from 'react';
import { SkillTabsWrapper, SkillTab } from './SkillTabs.elements';
import data from '../../assets/info.json';

export default function SkillTabs() {
  return (
    <SkillTabsWrapper>
      {data.technical_skills.map(skill => (
        <SkillTab key={skill}>{skill}</SkillTab>
      ))}
    </SkillTabsWrapper>
  )
}