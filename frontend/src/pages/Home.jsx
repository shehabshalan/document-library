import React from "react";
import UploadForm from "../components/UploadForm";
import Documents from "../components/Documents";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <UploadForm />
      <Documents />
    </Container>
  );
};

export default Home;
