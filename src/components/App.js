import React from "react";
import "../App.css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";
import Body from "./Body";

function App() {
  return (
    <Layout>
      <Container>
        <Header />
        <Body />
      </Container>
    </Layout>
  );
}

export default App;
