import styled from 'styled-components/macro';

export const NavBarWrapper = styled.div`
  width: 100%;
  background-color: #414047;
  border-bottom: 2px solid #a83214;
  position: fixed;
  top: 0;
  z-index: 5;
`;

export const NavBarContainer = styled.div`
  max-width: 75em;
  display: flex;
  margin: 0 auto;
`;

export const Avatar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Image = styled.div`
  width: 3em;
  height: auto;
  padding: .5em;

  > img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
    border: 1px solid #fff;
  }
`;

export const Title = styled.div`
  font-size: 1.2em;
  color: #fff;
  padding-left: .5em;
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1em;

  @media screen and (min-width: 768px) {
    display: none;
  }

  div {
    width: 2em;
    height: .25em;
    background-color: #fff;
    margin: .15em 0;
    border-radius: 20px;
  }
`;

export const Links = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;