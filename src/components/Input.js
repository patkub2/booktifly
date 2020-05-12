import React, { useState } from "react";
import styled from "styled-components";
import zoom from "../img/zoom.svg";
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
  input:focus,
  select:focus {
    outline: none;
  }
`;

const Input = () => {
  return (
    <InputWraper>
      <select>
        <option value="" disabled selected>
          Sort
        </option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
      <input type="text" placeholder="Search.." />
    </InputWraper>
  );
};

export default Input;
