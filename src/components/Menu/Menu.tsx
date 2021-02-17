import React from "react";
import { MenuWrapper } from "./Menu.elements";

interface IMenuProps {
  showMenu: boolean;
  menuToggle: () => void;
}

const Menu: React.FC<IMenuProps> = ({ showMenu, menuToggle }) => {
  return (
    <MenuWrapper onClick={menuToggle} className={showMenu ? "showMenu" : ""}>
      <ul>
        <li>
          <a
            href="https://github.com/brannonglover"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="https://twitter.com/BrannonGlover" rel="noreferrer">
            Twitter
          </a>
        </li>
        <li>Medium</li>
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
