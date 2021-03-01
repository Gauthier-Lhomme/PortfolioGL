import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const DivFooter = styled.div`
  @media ${Device.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    height: 10vh;
  }
`;

export const A = styled.a`
  @media ${Device.desktop} {
    color: white;
    padding-right: 2vh;
    text-decoration: none;
  }
`;

export const P = styled.p`
  @media ${Device.desktop} {
    color: white;
  }
`;
