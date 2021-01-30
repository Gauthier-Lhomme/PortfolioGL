import { Reset } from 'styled-reset'
import { AppDiv } from "./styled-components/App";
import Navbar from './components/Navbar'
import MainPage from './components/Mainpage';
import PresentationPage from './components/PresentationPage';

function App() {
  return (
    <AppDiv>
      <Reset/>
      <Navbar/>
      <MainPage/>
      <PresentationPage/>
    </AppDiv>
  );
}

export default App;
