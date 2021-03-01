import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const MainDiv = styled.div`
  @media ${Device.desktop} {
    background-color: #27326f;
    display: flex;
  }
`;

export const CodeImg = styled.img`
  @media ${Device.desktop} {
    height: 500px;
    padding-top: 28vh;
    padding-left: 30vh;
  }
`;

export const DivText = styled.div`
  @media ${Device.desktop} {
    padding-left: 16vh;
    padding-top: 40vh;
  }
`;

export const LogoImg = styled.img`
  @media ${Device.desktop} {
    height: 300px;
    padding-top: 8vh;
    padding-left: 20vh;
  }
`;

export const H1 = styled.h1`
  @media ${Device.desktop} {
    font-size: 60px;
    color: white;
  }
`;

export const P = styled.p`
  @media ${Device.desktop} {
    font-size: 43px;
    color: white;
    padding-top: 3vh;
  }
`;
