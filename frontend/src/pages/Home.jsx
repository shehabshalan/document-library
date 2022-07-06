import React from "react";
import UploadForm from "../components/UploadForm";
import Documents from "../components/Documents";
import { Box, Container, Divider } from "@mui/material";
import Navbar from "../components/Navbar";
import ExpirationModal from "../components/ExpirationModal";
import Footer from "../components/Footer";

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
      <Container maxWidth="lg">
        <UploadForm />
        <Divider sx={{ my: 5 }} />
        <Documents />
        <Divider sx={{ my: 5 }} />
        <Footer />
        <ExpirationModal />
      </Container>
    </Box>
  );
};

export default Home;
