import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const Documents = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={false} sm={4} md={7}>
        <Typography variant="h4" gutterBottom>
          Documents
        </Typography>

        <Box sx={{ height: "100vh" }}>
          <Grid container spacing={3}>
            {files.map((file) => (
              <Grid item xs={12} sm={6} md={4} key={file.id}>
                <Paper>
                  <Box p={3}>
                    <Typography variant="h5" gutterBottom>
                      {file.fileName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {file.fileType}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {file.fileSize}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {file.downloads}
                    </Typography>
                  </Box>
                </Paper>

                <a href={file.fileUrl}>Download</a>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Documents;
