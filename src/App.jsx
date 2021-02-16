import NavBar from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";
import { GlobalStyle } from "./components/GlobalStyle";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Resume />
      <Education />
    </>
  );
}

export default App;
