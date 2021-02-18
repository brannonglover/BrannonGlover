import React from "react";
import { MenuWrapper } from "./Menu.elements";
import data from "../../assets/info.json";

interface IMenuProps {
  showMenu?: boolean;
  menuToggle?: () => void;
}

const Menu: React.FC<IMenuProps> = ({ showMenu, menuToggle }) => {
  return (
    <MenuWrapper onClick={menuToggle} className={showMenu ? "showMenu" : ""}>
      <ul>
        {data.links.map((link) => (
          <li key={link.id}>
            <a href={link.url} rel="noreferrer" target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
