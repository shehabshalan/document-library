import React from "react";
import UploadForm from "../components/UploadForm";
import Documents from "../components/Documents";
import { Container } from "@mui/material";
import Expiration from "../components/Expiration";
const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <UploadForm />
      <Documents />
      <Expiration />
    </Container>
  );
};

export default Home;
