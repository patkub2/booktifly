import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import bac from "../img/green-leaves-on-top-of-open-book-near-paint-brush-and-green-2099266.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    max-height:100vh;
    color: #f0e6d7;
    font-family: Rockwell;
  margin: 0;
  padding: 0;
  background-image: url(${bac});
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;

  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
