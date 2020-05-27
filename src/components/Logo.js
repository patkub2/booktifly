import React from "react";
import styled from "styled-components";
import booklogo from "../img/books-stack-of-three.png";

const LogoWraper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  margin-right: 20px;
  img {
    width: 70px;
    margin-right: 10px;
  }
`;

const Logo = () => {
  return (
    <LogoWraper>
      <img src={booklogo} alt=""></img>Booktifly
    </LogoWraper>
  );
};

export default Logo;
