import styled from 'styled-components/macro';

export const MenuWrapper = styled.div`
  width: 35%;
  position: fixed;
  top: 4em;
  right: -50%;
  background-color: #414047;
  transition: right .3s ease;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    background: none;
    transition: none;
    width: auto;
    position: relative;
    right: 0;
    top: 0;
  }

  &.showMenu {
    right: 0;
    transition: right .3s ease;
  }

  ul {
    list-style-type: none;

    li {
      padding: .5em 0;

      @media screen and (min-width: 768px) {
        display: inline;
        padding: 0 1em;
      }

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;