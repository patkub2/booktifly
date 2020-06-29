import React, { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "./searchContext";
import nobook from "../img/nobook.png";

const BodyWrapper = styled.div`
  /*border: 1px solid red; /* RED*/
  width: 100%;
  min-height: 80vh;
  padding: 0px 50px;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

const Book = styled.div`
  /*border: 5px solid white; /* GREEN*/
  display: flex;
  width: 26vh;
  height: 36vh;
  margin: 2vh;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-height: 100%;
  height: 100%;
  border: 5px solid ${({ theme }) => theme.colors.white}; /* GREEN*/
  border-radius: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;
`;

const Cont = styled.div`
  position: relative;
  height: 36vh;
  width: 26vh;
  border-radius: 20px;
  :hover ${Overlay} {
    opacity: 0.7;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Header = () => {
  const { result } = useContext(SearchContext);
  //console.log(result.volumeInfo);
  // const { handleSearch, search } = useSearch();
  return (
    <BodyWrapper>
      {result.map((book) => (
        <Book key={Math.random()}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={book.volumeInfo.previewLink}
          >
            <Cont>
              <Img
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : nobook
                }
                alt="Avatar"
                className="image"
              />
              <Overlay>
                <Text>
                  {book.volumeInfo.title.length > 50
                    ? book.volumeInfo.title.replace(/ .*/, "")
                    : book.volumeInfo.title}
                </Text>
              </Overlay>
            </Cont>
          </a>
        </Book>
      ))}
    </BodyWrapper>
  );
};

export default Header;
