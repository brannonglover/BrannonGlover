import { useEffect, useRef, useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";
import { GlobalStyle } from "./components/GlobalStyle";
import Education from "./components/Education/Education";
import Menu from "./components/Menu/Menu";

function App() {
  const navBar = useRef();
  const [navHeight, setNavHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (navBar.current) {
      const getNavHeight = navBar.current.offsetHeight;
      setNavHeight(getNavHeight);
    }
  }, [navHeight]);

  return (
    <>
      <GlobalStyle />
      <NavBar ref={navBar} menuToggle={menuToggle} />
      <Resume navHeight={navHeight} />
      <Education />
      <Menu showMenu={showMenu} menuToggle={menuToggle} />
    </>
  );
}

export default App;
