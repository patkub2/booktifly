import React from "react";
import "../App.css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";
import Body from "./Body";
import { SearchContextProvider } from "./searchContext";

function App() {
  return (
    <Layout>
      <SearchContextProvider>
        <Container>
          <Header />
          <Body />
        </Container>
      </SearchContextProvider>
    </Layout>
  );
}

export default App;
