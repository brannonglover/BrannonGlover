import React from "react";
import { NavBarContainer, Avatar, Image, Title, Hamburger } from "./NavBar.elements";
import Me from "../../assets/images/me.png";
import strings from "../../common/strings";

const NavBar = React.forwardRef(({ menuToggle }, ref) => {
  return (
    <NavBarContainer ref={ref}>
      <Avatar>
        <Image>
          <img src={Me} alt="Brannon Glover" />
        </Image>
        <Title>{strings.FRONTEND_DEV}</Title>
      </Avatar>
      <Hamburger onClick={menuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
    </NavBarContainer>
  );
});

export default NavBar;
