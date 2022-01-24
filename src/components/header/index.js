import * as React from "react";

import { useState, useEffect } from "react";

import http from "../../helpers/api";
import { Home } from "../../pages/Home";

import AddDragon from "../addDragon";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import dragonLogoBg from "../../assets/images/dragonLogobg.png";

export default function SearchAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#0A2342" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={dragonLogoBg} width={90} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button color="inherit">
              <AddDragon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
