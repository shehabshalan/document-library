import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  FaFileWord,
  FaFileImage,
  FaFileExcel,
  FaFilePdf,
  FaFileDownload,
} from "react-icons/fa";
import { RiFileTextFill } from "react-icons/ri";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Button, CardActions, Divider } from "@mui/material";
import { useUserContext } from "../context/UserContext";

const documentIcon = (fileType) => (
  <>
    {fileType === "doc" && <FaFileWord size={30} />}
    {fileType === "docx" && <FaFileWord size={30} />}
    {fileType === "pdf" && <FaFilePdf size={30} />}
    {fileType === "xls" && <FaFileExcel size={30} />}
    {fileType === "csv" && <FaFileExcel size={30} />}
    {fileType === "txt" && <RiFileTextFill size={30} />}
    {fileType === "jpg" && <FaFileImage size={30} />}
    {fileType === "png" && <FaFileImage size={30} />}
    {fileType === "gif" && <FaFileImage size={30} />}
    {fileType === "svg" && <FaFileImage size={30} />}
  </>
);
const DocumentCard = ({ file }) => {
  const { handleOpen, handleDownloads } = useUserContext();
  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image={file.fileUrl}
        alt="green iguana"
        sx={{ objectFit: "fit" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {file.fileName.length > 15
            ? file.fileName.substring(0, 20) + "..."
            : file.fileName}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={4} md={4}>
            <ListItem>
              {documentIcon(file.fileType)}
              <ListItemText
                primary={file.fileType.toUpperCase()}
                sx={{ ml: 1 }}
              />
            </ListItem>
          </Grid>
          {/* <Grid item xs={4} md={4}>
            <ListItem>
              <ListItemText primary={file.fileSizeInMb} />
            </ListItem>
          </Grid> */}
          <Grid item xs={4} md={4}>
            <ListItem>
              <FaFileDownload size={20} />
              <ListItemText primary={file.downloads} />
            </ListItem>
          </Grid>
        </Grid>
        <Divider />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleOpen(file._id)}
        >
          Share
        </Button>
        <Button
          size="small"
          color="secondary"
          component="a"
          href={file.fileUrl}
          download
          target="_blank"
          onClick={() => handleDownloads(file._id)}
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
};

export default DocumentCard;
