import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Input from "./Input";

const NavBar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 40px 40px 0px 0px;
  img {
    width: 50px;
  }
`;

const Header = () => {
  return (
    <NavBar>
      <Logo />
      <Input />
    </NavBar>
  );
};

export default Header;
