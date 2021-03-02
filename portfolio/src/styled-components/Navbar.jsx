import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${Device.desktop} {
    padding-bottom: 3vh;
    padding-top: 5vh;
  }
  @media ${Device.tablet} {
    padding-bottom: 3vh;
    padding-top: 3vh;
  }
`;

export const Logo = styled.img`
  @media ${Device.desktop} {
    margin-left: 7vh;
    width: 60px;
    height: 64px;
  }
  @media ${Device.tablet} {
    margin-left: 2vh;
    width: 50px;
    height: 54px;
  }
`;

export const SocialLogo = styled.img`
  @media ${Device.desktop} {
    width: 64px;
    height: 64px;
    margin-right: 8vh;
  }
  @media ${Device.tablet} {
    width: 50px;
    height: 54px;
    margin-right: 4vh;
  }
`;

export const A = styled.a`
  color: #e5191c;
  text-decoration: none;
  @media ${Device.desktop} {
    font-size: 24px;

    margin-left: 20vh;
    &:hover {
      color: #27326f;
    }
  }
  @media ${Device.tablet} {
    font-size: 24px;

    margin-left: 8vh;
  }
`;
