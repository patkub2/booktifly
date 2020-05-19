import React, { useState } from "react";
import styled from "styled-components";

const Containerr = styled.nav`
  margin: 5vh 10vh;
  min-height: 90vh;
  border: 1px solid yellow; /* RED*/
  background: rgba(234, 226, 183, 0.7);
  border-radius: 40px;
`;

const Container = ({ children }) => {
  return <Containerr>{children}</Containerr>;
};

export default Container;
