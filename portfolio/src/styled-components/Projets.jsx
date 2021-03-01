import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const DivProjets = styled.div`
  @media ${Device.desktop} {
    background-color: #27326f;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const H1 = styled.h1`
  @media ${Device.desktop} {
    font-size: 90px;
    color: white;
  }
`;

export const DivCarousel = styled.div`
  @media ${Device.desktop} {
    height: 20vh;
  }
`;
