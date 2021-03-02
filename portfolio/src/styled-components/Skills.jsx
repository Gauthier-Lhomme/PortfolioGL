import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const Div = styled.div`
  background-color: #27326f;
`;

export const DivCards = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${Device.desktop} {
    padding-top: 7vh;
  }
  @media ${Device.tablet} {
  } ;
`;

export const DivSkills = styled.div`
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

    padding-top: 6vh;
  }
  @media ${Device.tablet} {
    font-size: 45px;
  }
`;

export const P = styled.p`
  color: white;
  text-align: center;
  @media ${Device.desktop} {
    font-size: 43px;
    padding-top: 4vh;
  }
  @media ${Device.tablet} {
    font-size: 33px;
    padding-top: 4vh;
  }
`;
export const DivCadre = styled.div`
  border: solid 7px white;
  @media ${Device.desktop} {
    padding-top: 3vh;
    padding-bottom: 2vh;
    padding-right: 5vh;
    padding-left: 5vh;
  }
  @media ${Device.tablet} {
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-right: 2vh;
    padding-left: 2vh;
  }
`;

export const Li = styled.li`
  color: white;
  @media ${Device.desktop} {
    font-size: 26px;

    padding-top: 1vh;
  }
  @media ${Device.tablet} {
    font-size: 20px;

    padding-top: 1vh;
  }
`;

export const Ul = styled.ul`
  @media ${Device.desktop} {
    padding-top: 3vh;
    padding-bottom: 2vh;
  }
  @media ${Device.tablet} {
    padding-top: 3vh;
    padding-bottom: 2vh;
  }
`;
