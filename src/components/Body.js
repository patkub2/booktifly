import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "./searchContext";

const BodyWrapper = styled.nav`
  border: 1px solid red; /* RED*/
  width: 100%;
  height: 80vh;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Book = styled.nav`
  border: 1px solid green; /* RED*/
  width: 20%;
  height: 40vh;
  img {
    width: 100%;
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
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          </a>
        </Book>
      ))}
    </BodyWrapper>
  );
};

export default Header;
