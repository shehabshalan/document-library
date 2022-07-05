import { Container, Typography } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Toolbar>
        <Typography
          variant="h6"
          align="center"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Document Sharing
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
