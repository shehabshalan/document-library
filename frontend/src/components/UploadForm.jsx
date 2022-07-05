import React from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUserContext } from "../context/UserContext";
import LoadingButton from "@mui/lab/LoadingButton";

const Input = styled("input")({
  display: "none",
});

const renderFiles = (files) => (
  <Stack spacing={2}>
    {files.map((file, i) => (
      <Box key={i}>
        <Typography variant="body1">{file.name}</Typography>
      </Box>
    ))}
  </Stack>
);

const UploadForm = () => {
  const {
    handleFileChange,
    handleSubmit,
    files,
    uploading,
    uploadingError,
    uploadingSuccess,
  } = useUserContext();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Upload Area
      </Typography>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          width: "100%",
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

            {files ? files.length > 0 && renderFiles(files) : null}
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
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              loading={uploading}
            >
              Submit
            </LoadingButton>
            {uploadingError && (
              <Alert severity="error">
                Error: file type is not supported or file size too large
              </Alert>
            )}
            {uploadingSuccess && (
              <Alert severity="success">Success: uploaded successfully</Alert>
            )}
          </Container>
        </Box>
      </Paper>
    </>
  );
};

export default UploadForm;
