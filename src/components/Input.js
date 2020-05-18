import React, { useState, useContext } from "react";
import styled from "styled-components";
import zoom from "../img/zoom.svg";
import { SearchContext } from "./searchContext";

const InputWraper = styled.nav`
  display: flex;
  outline: none;
  justify-content: space-around;
  align-items: center;
  width: 60vh;
  select:focus,
  textarea:focus,
  input:focus {
    outline: none;
  }
  input {
    width: 40vh;
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
  }
  select {
    width: 15vh;
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
  }
  option:hover,
  select:focus {
    outline: none;
  }
`;

const Input = () => {
  const { search, handleSearch } = useContext(SearchContext);
  return (
    <InputWraper>
      <form>
        <select>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
        <input onChange={handleSearch} type="text" placeholder="Search.." />
        {search}
      </form>
    </InputWraper>
  );
};

export default Input;
