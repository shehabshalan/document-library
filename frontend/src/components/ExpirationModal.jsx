import React from "react";
import { useUserContext } from "../context/UserContext";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import DateAndTimePicker from "./DateAndTimePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", md: "30%" },
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};
const ExpirationModal = () => {
  const {
    open,
    generatingLink,
    handleClose,
    handleShareFile,
    sharingError,
    sharingSuccess,
    sharingLink,
  } = useUserContext();

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleShareFile}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Set expiration date
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <DateAndTimePicker />
            </Grid>

            <Grid item xs={12}>
              {sharingLink && (
                <Alert severity="success">
                  <AlertTitle> here is your link</AlertTitle>
                  {/* <Typography>{sharingLink}</Typography> */}
                  <Typography>{sharingLink}</Typography>
                </Alert>
              )}
              {sharingError && (
                <Alert severity="error"> Error generating link!</Alert>
              )}
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                fullWidth
                variant="contained"
                color="primary"
                loading={generatingLink}
                type="submit"
              >
                Generate link
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default ExpirationModal;
