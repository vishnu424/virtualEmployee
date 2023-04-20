import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>{children}</Container>

      <Footer />
    </>
  );
};

export default Layout;
