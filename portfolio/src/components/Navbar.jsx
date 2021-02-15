import { A, Logo, NavbarDiv, SocialLogo } from "../styled-components/Navbar";
import logo from "../assets/icons/logo.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";

export default function Navbar() {
  return (
    <NavbarDiv>
      <div>
        <a href="#">
          <Logo src={logo} alt="logo" />
        </a>
        <A href="#">Présentation</A>
        <A href="#">Projets</A>
        <A href="#">Skills</A>
        <A href="#">Contact</A>
      </div>
      <div>
        <a href="#">
          {" "}
          <SocialLogo src={linkedin} alt="Linkedin" />
        </a>
        <a href="#">
          {" "}
          <SocialLogo src={github} alt="GitHub" />
        </a>
      </div>
    </NavbarDiv>
  );
}
