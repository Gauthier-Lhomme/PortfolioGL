import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const Div = styled.div``;

export const Height = styled.div`
  @media ${Device.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2vh;
  }
`;
export const H1 = styled.h1`
  @media ${Device.desktop} {
    font-size: 90px;
    color: white;
  }
`;

export const H2 = styled.h2`
  @media ${Device.desktop} {
    font-size: 2vh;
    padding-bottom: 1vh;
  }
`;

export const DivProjet = styled.div`
  @media ${Device.desktop} {
    background-color: #27326f;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const P = styled.p`
  @media ${Device.desktop} {
    font-size: 1.7vh;
    padding-bottom: 0.5vh;
  }
`;
