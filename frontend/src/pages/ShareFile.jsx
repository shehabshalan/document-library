import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DocumentCard from "../components/DocumentCard";
import { Box, Typography } from "@mui/material";
import SharedDocument from "../components/SharedDocument";
const ShareFile = () => {
  const { id } = useParams();
  const [file, setFile] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getFiles = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:5000/sharefile/${id}`;
      setLoading(true);
      let res = await axios.get(url);

      setFile(res.data.message);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    getFiles();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {error ? (
        <Typography>No file found or the link has expired</Typography>
      ) : loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Shared Document
          </Typography>
          <SharedDocument file={file} />
        </>
      )}
    </Box>
  );
};

export default ShareFile;
