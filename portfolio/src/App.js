import { Reset } from 'styled-reset'
import { AppDiv } from "./styled-components/App";

import Navbar from './components/Navbar'
import MainPage from './components/Mainpage';

function App() {
  return (
    <AppDiv>
      <Reset/>
      <Navbar/>
      <MainPage/>
    </AppDiv>
  );
}

export default App;
