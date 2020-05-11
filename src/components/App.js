import React from "react";
import "../App.css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Container>
        <Header></Header>
      </Container>
    </Layout>
  );
}

export default App;
