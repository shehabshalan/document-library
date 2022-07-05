import React from "react";
import UploadForm from "../components/UploadForm";
import Documents from "../components/Documents";
import { Box, Container, Divider } from "@mui/material";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Container maxWidth="lg">
        <UploadForm />
        <Divider sx={{ my: 5 }} />
        <Documents />
      </Container>
    </Box>
  );
};

export default Home;
