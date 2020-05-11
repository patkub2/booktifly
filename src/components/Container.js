import React, { useState } from "react";
import styled from "styled-components";

const Containerr = styled.nav`
  margin: 5vh 10vh;
  height: 90vh;
  display: flex;

  background: rgba(234, 226, 183, 0.7);
  border-radius: 40px;
`;

const Container = ({ children }) => {
  return <Containerr>{children}</Containerr>;
};

export default Container;
