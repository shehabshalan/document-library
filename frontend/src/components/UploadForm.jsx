import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUserContext } from "../context/UserContext";

const Input = styled("input")({
  display: "none",
});
const UploadForm = () => {
  const { handleFileChange, handleSubmit } = useUserContext();

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        maxWidth: 700,
        margin: "auto",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 1,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h6" align="center" paragraph>
            upload your files here
          </Typography>
          <Stack direction="column" spacing={2} justifyContent="center">
            <label htmlFor="contained-button-thumbnail">
              <Input
                accept=".doc, .pdf, .docx, .txt, .csv, .xls, .xlsx, image/*"
                id="contained-button-thumbnail"
                name="myfile"
                onChange={handleFileChange}
                type="file"
                multiple
              />
              <Button
                sx={{ width: "100%" }}
                variant="outlined"
                component="span"
              >
                Document
              </Button>
            </label>
            {/* {progressImage > 0 && <ProgressBar progress={progressImage} />} */}
          </Stack>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Container>
      </Box>
    </Paper>
  );
};

export default UploadForm;
