import styled from "styled-components";
import { Device } from "../assets/device/Device";

export const Contact = styled.div`
  background-color: #e5191c;
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
  }
  @media ${Device.tablet} {
    font-size: 45px;
  }
`;

export const Form = styled.form`
  border: 3px solid #27326f;
  @media ${Device.desktop} {
    margin-left: 35vw;
    margin-top: 5vw;
    margin-bottom: 5vw;

    border-radius: 1em;
    width: 30vw;
    height: 39vh;
  }
  @media ${Device.tablet} {
    margin-left: 20vw;
    margin-top: 5vw;
    margin-bottom: 5vw;

    border-radius: 1em;
    width: 60vw;
    height: 40vh;
  }
`;

export const Label = styled.label`
  @media ${Device.desktop} {
    display: inline-block;
    width: 5vw;
    margin-top: 5vh;
    margin-left: 2vw;
  }
  @media ${Device.tablet} {
    display: inline-block;
    width: 5vw;
    margin-top: 5vh;
    margin-left: 10vw;
  }
`;

export const LabelMessage = styled.label`
  @media ${Device.desktop} {
    display: inline-block;
    width: 5vw;
    margin-top: 5vh;
    vertical-align: top;
    margin-left: 2vw;
  }
  @media ${Device.tablet} {
    display: inline-block;
    width: 5vw;
    margin-top: 5vh;
    vertical-align: top;
    margin-left: 7.5vw;
    margin-right: 3vh;
  }
`;

export const Input = styled.input`
  @media ${Device.desktop} {
    width: 18.2vw;
    box-sizing: border-box;
    text-align: center;
  }
  @media ${Device.tablet} {
    width: 30vw;
    box-sizing: border-box;
    text-align: center;
  }
`;

export const TextArea = styled.textarea`
  @media ${Device.desktop} {
    width: 20vw;
    height: 9vh;
    box-sizing: border-box;
    margin-top: 5vh;
    resize: none;
  }
  @media ${Device.tablet} {
    width: 30vw;
    height: 9vh;
    box-sizing: border-box;
    margin-top: 5vh;
    resize: none;
  }
`;

export const InputSubmit = styled.input`
  color: white;
  background-color: #27326f;
  box-sizing: border-box;
  @media ${Device.desktop} {
    height: 4vh;
    width: 8vw;

    margin-top: 3vh;
    margin-left: 12vw;

    font-size: 1.8vh;
    cursor: pointer;
  }
  @media ${Device.tablet} {
    height: 6vh;
    width: 10vw;
    margin-top: 3vh;
    margin-left: 25vw;

    font-size: 1.8vh;
  }
`;
