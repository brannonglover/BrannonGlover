import styled from 'styled-components/macro';

export const Section = styled.div`
  padding: 0 .5em;
  padding-top: ${props => `${props.navHeight}px`};
`;

export const Header = styled.h1`
  margin: .7em 0 .5em;
  font-size: 1.5em;
`;

export const SubHeader = styled.h2`
  margin: 1em 0 .5em;
  font-size: 1.3em;
`;

export const Paragraph = styled.p`
  margin: 0;
`;