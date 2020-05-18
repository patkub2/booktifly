import React, { useState } from "react";
const SearchContext = React.createContext();

function SearchContextProvider(props) {
  const [search, setSearch] = useState();

  //function toggleTheme() {
  //     setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  //}

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchContextProvider, SearchContext };
