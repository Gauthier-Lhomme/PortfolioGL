import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const DivFooter = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${Device.desktop} {
    height: 10vh;
  }
  @media ${Device.tablet} {
    height: 8vh;
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
  @media ${Device.desktop} {
    padding-right: 2vh;
  }
  @media ${Device.tablet} {
    padding-right: 5vh;
  }
`;

export const P = styled.p`
  color: white;
`;
