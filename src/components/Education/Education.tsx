import React from 'react';
import { EducationWrapper, Header, Title, School, Major } from './Education.elements';
import data from '../../assets/info.json';

export default function Education() {
  return (
    <>
      <EducationWrapper>
        <Header>Education</Header>
        {data.school.map(school => (
          <React.Fragment key={school.id}>
            <Title>{school.degree}</Title>
            <School>{school.school}</School>
            <Major>{school.major}</Major>
          </React.Fragment>
        ))}
      </EducationWrapper>
    </>
  )
}