import React, { useState, useContext } from "react";
import styled from "styled-components";
import zoom from "../img/zoom.svg";
import { SearchContext } from "./searchContext";

const InputWraper = styled.nav`
  border: 1px solid red; /* RED*/
  display: flex;
  outline: none;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  flex-wrap: wrap;
`;

const InputArea = styled.input`
  width: 65%;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${zoom});
  outline: none;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 13px 0px 12px 40px;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  min-width: 30%;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 5px;
  outline: none;
  :hover {
    outline: none;
  }
`;

const Input = () => {
  const { search, handleSearch, handleSubmit } = useContext(SearchContext);
  return (
    <form onSubmit={handleSubmit}>
      <InputWraper>
        <InputArea onChange={handleSearch} type="text" placeholder="Search.." />
        <Button type="submit">Search</Button>
      </InputWraper>
    </form>
  );
};

export default Input;
