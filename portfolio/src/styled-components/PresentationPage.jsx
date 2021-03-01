import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const DivPresentation = styled.div`
  background-color: #e5191c;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${Device.desktop} {
    height: 150px;
  }
  @media ${Device.tablet} {
    height: 12vh;
  }
`;

export const H1 = styled.h1`
  color: white;

  @media ${Device.desktop} {
    font-size: 90px;
  }
  @media ${Device.tablet} {
    font-size: 45px;
  }
`;

export const DivDescription = styled.div`
  display: flex;
  @media ${Device.desktop} {
    background-color: #f3f2f2;
    width: 100%;
  }
`;

export const P = styled.p`
  color: #e5191c;

  @media ${Device.desktop} {
    font-size: 26px;
    padding-left: 15vh;
    padding-right: 15vh;
    padding-top: 19vh;
  }
  @media ${Device.tablet} {
    font-size: 20px;
    padding-left: 10vh;
    padding-right: 10vh;
    padding-top: 12vh;
  }
`;

export const Img = styled.img`
  @media ${Device.desktop} {
    width: 400px;
  }
  @media ${Device.tablet} {
    width: 300px;
  }
`;
