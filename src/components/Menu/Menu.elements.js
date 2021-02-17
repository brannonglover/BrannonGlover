import styled from 'styled-components/macro';

export const MenuWrapper = styled.div`
  width: 50%;
  position: fixed;
  top: 4em;
  right: -160px;
  background-color: #414047;
  transition: right .3s ease;

  &.showMenu {
    right: 0;
    transition: right .3s ease;
  }

  ul {
    list-style-type: none;

    li {
      color: #fff;
      padding: .5em 0;
    }
  }
`;