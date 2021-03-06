import React from "react";
import styled from "styled-components";

const Containerr = styled.nav`
  margin: 5vh 10vh;
  min-height: 90vh;
  /*border: 1px solid yellow; /* RED*/
  background: rgba(234, 226, 183, 0.7);
  border-radius: 40px;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

const Container = ({ children }) => {
  return <Containerr>{children}</Containerr>;
};

export default Container;
