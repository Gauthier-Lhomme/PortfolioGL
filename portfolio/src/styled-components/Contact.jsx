import styled from "styled-components";

export const Contact = styled.div`
  background-color: #e5191c;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 90px;
  color: white;
`;


export const Form = styled.form`
 margin-left: 35vw;
 margin-top: 5vw;
 margin-bottom: 5vw;
  border: 3px solid #27326f;
  border-radius: 1em;
  width : 30vw;
  height : 39vh;

`;

export const Label = styled.label`
display: inline-block;
  width: 5vw;
  margin-top : 5vh;
  margin-left: 2vw;
`;

export const LabelMessage = styled.label`
display: inline-block;
  width: 5vw;
  margin-top : 5vh;
  vertical-align: top;
  margin-left: 2vw;

`;

export const Input = styled.input`
  width: 18.2vw;
  box-sizing: border-box;
  text-align:center
`;

export const TextArea = styled.textarea`
  width: 20vw;
  height: 9vh;
  box-sizing: border-box;
  margin-top : 5vh;
  resize: none;

`;

export const InputSubmit = styled.input`
  height: 4vh;
  width: 8vw;
  box-sizing: border-box;
  margin-top : 3vh;
  margin-left: 12vw;
  color: white;
  background-color :#27326f;
  font-size: 1.8vh;
  cursor: pointer;
`;