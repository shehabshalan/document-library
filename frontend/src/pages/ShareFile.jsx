import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import SharedDocument from "../components/SharedDocument";
import { Endpoints } from "../constants/endpoints";
const ShareFile = () => {
  const { id } = useParams();
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSharedFile = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${Endpoints.getSharedFileById}/${id}`);
      setFile(res.data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getSharedFile();
    // eslint-disable-next-line no-unused-vars
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
