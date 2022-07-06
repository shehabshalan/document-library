import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DocumentCard from "./DocumentCard";
import { useUserContext } from "../context/UserContext";
const Documents = () => {
  const { files, loading } = useUserContext();

  if (loading) {
    return (
      <Typography variant="body1" gutterBottom>
        Loading...
      </Typography>
    );
  }

  if (files?.length === 0) {
    return (
      <Typography variant="h4" gutterBottom>
        No files yet
      </Typography>
    );
  }

  return (
    <Grid container component="section">
      <Typography variant="h4" gutterBottom>
        Documents
      </Typography>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {files.map((file) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={file._id}
            component="article"
          >
            <DocumentCard file={file} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Documents;
