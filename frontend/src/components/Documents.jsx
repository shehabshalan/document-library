import * as React from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Typography } from "@mui/material";
import DocumentCard from "./DocumentCard";
const Documents = () => {
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getFiles = async () => {
    setLoading(true);

    try {
      const res = await axios.get("http://localhost:5000/files");
      console.log(res.data);
      setFiles(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  React.useEffect(() => {
    getFiles();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (files?.length === 0) {
    return <h1>No files found</h1>;
  }

  return (
    <Grid container sx={{ height: "100vh" }}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} key={file._id}>
            <DocumentCard file={file} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Documents;
