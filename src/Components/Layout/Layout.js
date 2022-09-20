import React from "react";
import Container from "@mui/material/Container";
import "./Layout.css";

function Layout({ children }) {
  return (
    <Container
      maxWidth="xl"
      className="main"
    >
      <h1>POKEDEX</h1>
      {children}
    </Container>
  );
}

export default Layout;
