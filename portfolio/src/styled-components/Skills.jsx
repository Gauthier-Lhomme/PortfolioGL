import styled from "styled-components";

export const Div = styled.div`
  background-color: #27326f;

`

export const DivCards = styled.div`
display : flex;
justify-content : space-around;
padding-top : 7vh;
`

export const DivSkills = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const H1 = styled.h1`
  font-size: 90px;
  color: white;
  padding-top : 6vh;
`

export const P = styled.p`
  color: white;
  font-size: 43px;
  text-align : center;
  padding-top : 4vh;
`
export const DivCadre = styled.div`
border : solid 7px white;
padding-top : 3vh;
padding-bottom : 2vh;
padding-right : 5vh;
padding-left : 5vh;
`

export const Li = styled.li `
font-size : 26px;
color : white;
padding-top : 1vh;
`

export const Ul = styled.ul`
padding-top : 3vh;
padding-bottom : 2vh;`

export const ScrollingDiv = styled.div`
height: 17vh;; 
overflow: hidden;
position: relative;
background-color : red;
`

export const PScrolling = styled.p`
padding-top : 6vh;
font-size : 80px;
color : white;
position: absolute;
width: 100%;
height: 100%;
margin: 0;
line-height: 50px;
text-align: center;
/* Starting position */
-moz-transform:translateX(100%);
-webkit-transform:translateX(100%); 
transform:translateX(100%);
/* Apply animation to this element */ 
-moz-animation: scroll-left 10s linear infinite;
-webkit-animation: scroll-left 10s linear infinite;
animation: scroll-left 10s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
0% { -moz-transform: translateX(100%); }
100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes scroll-left {
0% { -webkit-transform: translateX(100%); }
100% { -webkit-transform: translateX(-100%); }
}
@keyframes scroll-left {
0% { 
-moz-transform: translateX(100%); /* Browser bug fix */
-webkit-transform: translateX(100%); /* Browser bug fix */
transform: translateX(100%); 
}
100% { 
-moz-transform: translateX(-100%); /* Browser bug fix */
-webkit-transform: translateX(-100%); /* Browser bug fix */
transform: translateX(-100%); 
}
`

export const PMarquee = styled.p`
margin: 0 auto;
width : 100%;
  white-space: nowrap;
  overflow: hidden;
  position : absolute;
  @keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
`

export const SpanMarquee = styled.span`
display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
  font-size :80px;
  
  `

  export const SpanMarquee2 = styled.span`
  font-size : 80px;
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
  animation-delay: 7.3s;`

