import styled, {createGlobalStyle} from "styled-components";
import {colors} from './variables';

export const GlobalStyles = createGlobalStyle`


  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
    
  }
`;

export const MainHeaderContainer = styled.h3`
  text-align: center;
  padding: 1rem;
  font-size: clamp(1.6rem,7vw,5rem);
  font-weight: 900;
  text-decoration: underline;
  text-transform: uppercase;
  background-image: linear-gradient(to right, ${colors.colorPrimaryDark}, ${colors.colorPrimaryLight});
  -webkit-background-clip:text;
  background-clip: text;
  color: transparent;
  letter-spacing: .3rem;
`;

