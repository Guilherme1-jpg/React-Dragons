import React, { useState, useEffect } from "react";

import http from "../../helpers/api";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddDragon() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState([]);

  async function addNewDragon(e) {
    e.preventDefault();
    await http.post("/dragon", {
      name,
      type,
      histories,
      id: uuid(),
      createdAt: new Date(),
    });
  }

  const handleAddSucess = () => {
    window.confirm("cadastrado com sucesso 🐲, F5 to refresh");
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          backgroundColor: "#21b6ae",
          padding: "18px 36px",
          fontSize: "18px",
        }}
        variant="contained"
      >
        <AddIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicione seu novo Pet gigante
          </Typography>

          <form onSubmit={addNewDragon}>
            <Stack direction="column" spacing={3}>
              <Input
                type="text"
                placeholder="digite o nome dele"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type="text"
                placeholder="digite o tipo dele"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Conta pra gente se ele tem historia"
                value={histories}
                onChange={(e) => setHistories(e.target.value)}
              />

              <Button
                variant="contained"
                type="submit"
                onClick={handleAddSucess}
              >
                Enviar
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
