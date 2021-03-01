import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const Div = styled.div``;

export const Height = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${Device.desktop} {
    padding-top: 2vh;
  }
  @media ${Device.tablet} {
    padding-top: 2vh;
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

export const H2 = styled.h2`
  @media ${Device.desktop} {
    font-size: 2vh;
    padding-bottom: 1vh;
  }
`;

export const DivProjet = styled.div`
  background-color: #27326f;
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

export const P = styled.p`
  @media ${Device.desktop} {
    font-size: 1.7vh;
    padding-bottom: 0.5vh;
  }
`;
