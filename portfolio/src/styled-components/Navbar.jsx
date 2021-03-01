import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const NavbarDiv = styled.div`
  @media ${Device.desktop} {
    padding-bottom: 3vh;
    padding-top: 5vh;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  @media ${Device.desktop} {
    margin-left: 7vh;
    width: 60px;
    height: 64px;
  }
`;

export const SocialLogo = styled.img`
  @media ${Device.desktop} {
    width: 64px;
    height: 64px;
    margin-right: 8vh;
  }
`;

export const A = styled.a`
  @media ${Device.desktop} {
    color: #e5191c;
    font-size: 24px;
    text-decoration: none;
    margin-left: 20vh;
    &:hover {
      color: #27326f;
    }
  }
`;
