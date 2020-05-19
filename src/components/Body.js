import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "./searchContext";
import nobook from "../img/nobook.png";

const BodyWrapper = styled.div`
  border: 1px solid red; /* RED*/
  width: 100%;
  min-height: 80vh;
  padding: 0px 50px;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

const Book = styled.div`
  border: 1px solid green; /* RED*/
  display: flex;
  width: 26vh;
  height: 36vh;
  margin: 2vh;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Img = styled.img`
  width: auto;

  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 24vh;
  height: 34vh;
  align-items: center;
  border-radius: 20px;
  padding: 1vh;
`;
const Header = () => {
  const { result } = useContext(SearchContext);
  // const { handleSearch, search } = useSearch();
  return (
    <BodyWrapper>
      {result.map((book) => (
        <Book>
          <a target="_blank" href={book.volumeInfo.previewLink}>
            <Img
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
