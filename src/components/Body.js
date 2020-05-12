import React, { useState } from "react";
import styled from "styled-components";

import useSearch from "./useSearch";

const BodyWrapper = styled.nav`
  border: 1px solid red; /* RED*/
  width: 100%;
  height: 80vh;
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const { search } = useSearch();
  return <BodyWrapper>{search}</BodyWrapper>;
};

export default Header;
