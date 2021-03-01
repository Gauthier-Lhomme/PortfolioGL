import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const Div = styled.div`
  @media ${Device.desktop} {
    background-color: #27326f;
  }
`;

export const DivCards = styled.div`
  @media ${Device.desktop} {
    display: flex;
    justify-content: space-around;
    padding-top: 7vh;
  }
`;

export const DivSkills = styled.div`
  @media ${Device.desktop} {
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
    padding-top: 6vh;
  }
`;

export const P = styled.p`
  @media ${Device.desktop} {
    color: white;
    font-size: 43px;
    text-align: center;
    padding-top: 4vh;
  }
`;
export const DivCadre = styled.div`
  @media ${Device.desktop} {
    border: solid 7px white;
    padding-top: 3vh;
    padding-bottom: 2vh;
    padding-right: 5vh;
    padding-left: 5vh;
  }
`;

export const Li = styled.li`
  @media ${Device.desktop} {
    font-size: 26px;
    color: white;
    padding-top: 1vh;
  }
`;

export const Ul = styled.ul`
  @media ${Device.desktop} {
    padding-top: 3vh;
    padding-bottom: 2vh;
  }
`;
