import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Button, CardActions, Divider } from "@mui/material";
import { documentIcon } from "./DocumentCard";
import { useUserContext } from "../context/UserContext";

const SharedDocument = ({ file }) => {
  const { handleDownloads } = useUserContext();

  const supportedPreviewFileTypes = ["jpg", "png", "gif", "svg"];

  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image={
          supportedPreviewFileTypes.includes(file.fileType)
            ? file.fileUrl
            : require("../assets/no-preview.jpg")
        }
        alt="green iguana"
        sx={{ objectFit: "fit" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {file?.fileName?.length > 15
            ? file?.fileName?.substring(0, 20) + "..."
            : file?.fileName}
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
              {documentIcon(file?.fileType)}
              <ListItemText
                primary={file?.fileType?.toUpperCase()}
                sx={{ ml: 1 }}
              />
            </ListItem>
          </Grid>
        </Grid>
        <Divider />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          component="a"
          href={file?.fileUrl}
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

export default SharedDocument;
