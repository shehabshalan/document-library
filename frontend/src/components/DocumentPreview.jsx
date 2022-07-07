import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  maxHeight: "800px",
  maxWidth: "600px",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const supportedPreviewFileTypes = ["jpg", "png", "gif", "svg"];

const DocumentPreview = ({ file, openImage, handleCloseImage }) => {
  return (
    <Modal
      open={openImage}
      onClose={handleCloseImage}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {file.fileUrl.includes("pdf") ? (
          <img
            src={`${file.fileUrl.split("pdf")[0]}jpg`}
            width="100%"
            height="100%"
            style={{ objectFit: "fit" }}
          />
        ) : (
          <img
            src={
              supportedPreviewFileTypes.includes(file.fileType)
                ? file.fileUrl
                : require("../assets/no-preview.jpg")
            }
            width="100%"
            height="100%"
            style={{ objectFit: "scale-down" }}
          />
        )}
      </Box>
    </Modal>
  );
};

export default DocumentPreview;
