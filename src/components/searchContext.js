import React, { useState } from "react";
import axios from "axios";
const SearchContext = React.createContext();

function SearchContextProvider(props) {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyC7kSGBBwaEW_cAoCAtnEnlh3vPRgIWoaA"
  );

  //function toggleTheme() {
  //     setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  //}

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=" +
          apiKey +
          "&maxResults=8"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <SearchContext.Provider
      value={{ search, handleSearch, handleSubmit, result }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchContextProvider, SearchContext };
