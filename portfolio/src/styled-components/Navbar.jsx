import styled from "styled-components";

export const NavbarDiv = styled.div`
  padding-bottom: 3vh;
  padding-top: 5vh;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-left: 7vh;
  width: 60px;
  height: 64px;
`;

export const SocialLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 8vh;
`;

export const A = styled.a`
  color: #e5191c;
  font-size: 24px;
  text-decoration: none;
  margin-left: 20vh;
  &:hover {
    color: #27326f;
  }
`;
