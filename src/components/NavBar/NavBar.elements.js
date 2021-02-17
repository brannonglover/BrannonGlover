import styled from 'styled-components/macro';

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #414047;
  border-bottom: 1px solid #fff;
  position: fixed;
  top: 0;
  z-index: 5;
`;

export const Avatar = styled.div`
  display: flex;
  flex-basis: 85%;
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
`;