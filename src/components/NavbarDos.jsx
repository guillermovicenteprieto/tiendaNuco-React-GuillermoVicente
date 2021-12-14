import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavbarDos = () => {
  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Typography variant="h6">hey ho, let´s go!</Typography>
        <Typography variant="h1">hello world!</Typography>
      </AppBar>
    </div>
  );
};

export default NavbarDos;
