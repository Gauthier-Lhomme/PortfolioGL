import { Reset } from 'styled-reset'
import { AppDiv } from "./styled-components/App";

import Navbar from './components/Navbar'

function App() {
  return (
    <AppDiv>
      <Reset/>
      <Navbar/>
    </AppDiv>
  );
}

export default App;
