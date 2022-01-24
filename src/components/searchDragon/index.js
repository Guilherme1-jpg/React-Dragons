import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { filterDragon } from "../../helpers/utilities";

import http from "../../helpers/api";
import * as C from "./styled";

export default function SearchDragon() {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dragon, setDragon] = useState([]);
  const [text, setText] = useState("");

  const searchallDragons = async () => {
    setLoading(true);
    let result = await http.get(`/dragon/${text}`);
    let json = result.data;
    setLoading(false);
    setDragon(json);
  };

  useEffect(() => {
    searchallDragons();
  }, [text]);

  return (
    <>
      <Button onClick={handleOpen}>
        <Typography>Pesquise aqui seu amigo</Typography>
        <SearchRoundedIcon />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={8}>
          <C.SearchArea>
            <Card sx={{ maxWidth: 500, width: 350 }}>
              <CardContent>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Pesquise seu favorito
                </Typography>

                <TextField
                  id="standard-basic"
                  label="busque seu dragão (id)"
                  variant="standard"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <Typography gutterBottom variant="h5" component="div">
                  Nome: {dragon?.name} 🐲
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h3>Tipo:{dragon?.type}</h3>
                  <h3>Detalhes:{dragon?.histories}</h3>
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </C.SearchArea>
        </Box>
      </Modal>
    </>
  );
}
