import NavBar from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Resume />
    </>
  );
}

export default App;
