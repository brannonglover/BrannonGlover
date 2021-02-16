import React from "react";
import { NavBarContainer, Avatar, Links, Hamburger } from "./NavBar.elements";
import Me from "../../assets/images/me.png";

export default function NavBar() {
  return (
    <NavBarContainer>
      <Avatar>
        <img src={Me} alt="Brannon Glover" />
      </Avatar>
      <Hamburger>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Links>
        <a
          href="https://github.com/brannonglover"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a href="https://twitter.com/BrannonGlover" rel="noreferrer">
          Twitter
        </a>
      </Links>
    </NavBarContainer>
  );
}
