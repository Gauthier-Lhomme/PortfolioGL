import { Reset } from "styled-reset";
import { AppDiv } from "./styled-components/App";
import Navbar from "./components/Navbar";
import MainPage from "./components/Mainpage";
import PresentationPage from "./components/PresentationPage";
import Carousel from "./components/Carousel";
import Skills from "./components/Skills";

function App() {
  return (
    <AppDiv>
      <Reset />
      <Navbar />
      <MainPage />
      <PresentationPage />
      <Carousel />
      <Skills />
    </AppDiv>
  );
}

export default App;
