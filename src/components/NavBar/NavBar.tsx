import React from "react";
import {
  NavBarWrapper,
  NavBarContainer,
  Avatar,
  Image,
  Title,
  Hamburger,
  Description
} from "./NavBar.elements";
import Me from "../../assets/images/me.png";
import strings from "../../common/strings";
import Menu from "../Menu/Menu";
import ResumeDownload from "./ResumeDownload/ResumeDownload";
import DownloadIcon from '../../assets/images/white-download-icon.png';

interface INavBarProps {
  menuToggle: () => void;
  ref: React.Ref<HTMLDivElement>;
}

const NavBar: React.FC<INavBarProps> = React.forwardRef(
  ({ menuToggle }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <NavBarWrapper>
        <NavBarContainer ref={ref}>
          <Avatar>
            <Image>
              <img src={Me} alt="Brannon Glover" />
            </Image>
            <Title>{strings.WEB_DEV} <a href="/Brannon-Resume.docx"><img src={DownloadIcon} height="15" /></a></Title>
            {/* <ResumeDownload /> */}
          </Avatar>
          <Menu />
          <Hamburger onClick={menuToggle}>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        </NavBarContainer>
      </NavBarWrapper>
    );
  }
);

export default NavBar;
