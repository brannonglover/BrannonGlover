import React from "react";
import { NavBarContainer, Avatar, Image, Title, Links, Hamburger } from "./NavBar.elements";
import Me from "../../assets/images/me.png";

export default function NavBar() {
  return (
    <NavBarContainer>
      <Avatar>
        <Image>
          <img src={Me} alt="Brannon Glover" />
        </Image>
        <Title>Frontend Developer</Title>
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
