import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const MainDiv = styled.div`
  background-color: #27326f;
  display: flex;
  @media ${Device.desktop} {
  }
`;

export const CodeImg = styled.img`
  @media ${Device.desktop} {
    height: 500px;
    padding-top: 28vh;
    padding-left: 30vh;
  }
  @media ${Device.tablet} {
    height: 350px;
    padding-top: 24vh;
    padding-left: 6vh;
    padding-bottom: 2vh;
  }
`;

export const DivText = styled.div`
  @media ${Device.desktop} {
    padding-left: 16vh;
    padding-top: 40vh;
  }
  @media ${Device.tablet} {
    padding-left: 7vh;
    padding-top: 30vh;
  }
`;

export const LogoImg = styled.img`
  @media ${Device.desktop} {
    height: 300px;
    padding-top: 8vh;
    padding-left: 20vh;
  }
  @media ${Device.tablet} {
    height: 250px;
    padding-top: 6vh;
    padding-left: 5vh;
  }
`;

export const H1 = styled.h1`
  color: white;
  @media ${Device.desktop} {
    font-size: 60px;
  }
  @media ${Device.tablet} {
    font-size: 39px;
  }
`;

export const P = styled.p`
  color: white;
  @media ${Device.desktop} {
    font-size: 43px;

    padding-top: 3vh;
  }
  @media ${Device.tablet} {
    font-size: 25px;

    padding-top: 3vh;
  }
`;
