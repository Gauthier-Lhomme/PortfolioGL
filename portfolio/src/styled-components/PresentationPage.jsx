import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const DivPresentation = styled.div`
  @media ${Device.desktop} {
    background-color: #e5191c;
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

export const DivDescription = styled.div`
  @media ${Device.desktop} {
    display: flex;
    background-color: #f3f2f2;
    width: 100%;
  }
`;

export const P = styled.p`
  @media ${Device.desktop} {
    color: #e5191c;
    font-size: 26px;
    padding-left: 15vh;
    padding-right: 15vh;
    padding-top: 19vh;
  }
`;

export const Img = styled.img`
  @media ${Device.desktop} {
    width: 400px;
  }
`;
