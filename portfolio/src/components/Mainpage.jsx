import {
  CodeImg,
  MainDiv,
  LogoImg,
  DivText,
  H1,
  P,
} from "../styled-components/Mainpage";
import logomain from "../assets/icons/logomain.png";
import coding from "../assets/icons/coding.png";

export default function MainPage() {
  return (
    <MainDiv>
      <div>
        <LogoImg src={logomain} alt="" />
      </div>
      <DivText>
        <H1>Developpeur Web</H1>
        <P>Front-End</P>
        <P>Back-End</P>
      </DivText>
      <div>
        <CodeImg src={coding} alt="" />
      </div>
    </MainDiv>
  );
}
