import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

function useSearch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState();

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }
  return { handleSearch, search };
}

export default useSearch;
