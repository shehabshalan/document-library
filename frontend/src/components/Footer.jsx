import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <Box component={"footer"}>
      <Typography>
        Copyright &copy; {today.getFullYear()} Document Sharing | Shehab Shalan
      </Typography>
    </Box>
  );
};

export default Footer;
