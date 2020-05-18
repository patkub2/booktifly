import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "./searchContext";
import nobook from "../img/nobook.png";

const BodyWrapper = styled.div`
  border: 1px solid red; /* RED*/
  width: 100%;
  height: 80vh;
  max-height: 80vh;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Book = styled.div`
  border: 1px solid red; /* RED*/
  background-color: ${({ theme }) => theme.colors.white};
  width: 15%;
  height: 36vh;
  margin: 0 2vh;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    align-items: center;
    border-radius: 10px 10px 0 0;
  }
`;

const Header = () => {
  const { result } = useContext(SearchContext);
  // const { handleSearch, search } = useSearch();
  return (
    <BodyWrapper>
      {result.map((book) => (
        <Book>
          <a target="_blank" href={book.volumeInfo.previewLink}>
            <img
              src={
                book.volumeInfo.imageLinks.thumbnail
                  ? book.volumeInfo.imageLinks.thumbnail
                  : nobook
              }
              alt={book.title}
            />
          </a>
        </Book>
      ))}
    </BodyWrapper>
  );
};

export default Header;
