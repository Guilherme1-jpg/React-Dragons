import * as React from "react";
import { http } from "../../helpers/api";
import { useState, useEffect } from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import dragonRawr from "../../assets/images/dragon-rawr.gif";
import * as C from "./styled";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";

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

export default function RecipeReviewCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState([]);

  const [dragon, setDragon] = useState([]);

  const allDragons = async () => {
    let result = await http.get("dragon?orderby=id");
    let json = result.data;
    setDragon(json);

    console.log("res", json);
  };

  function removeDragon(id) {
    http.delete(`/dragon/${id}`);
  }

  function editDragon(id) {
    http.put(`/dragon/${id}`, {
      name,
      type,
      histories,
    });
  }

  useEffect(() => {
    allDragons();
  }, []);

  return (
    <>
      <C.Container>
        <Grid container spacing={6}>
          {dragon.map((item) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <div key={item}>
                  <CardMedia component="img" height="140" image={dragonRawr} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      variant="body4"
                      color="text.secondary"
                      component="div"
                    >
                      {item.type}
                      <br />
                      {item.createdAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Detalhes:{item?.histories}
                    </Typography>
                    <br />
                    <Typography variant="body" color="text.secondary">
                      Identificação:{item?.id}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={handleOpen}>
                      <EditIcon sx={{ fontSize: 32 }} />
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Modifique seu dragão
                          </Typography>

                          <form>
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
                                onClick={() => {
                                  editDragon(item?.id);
                                }}
                              >
                                Enviar
                              </Button>
                            </Stack>
                          </form>
                        </Box>
                      </Modal>
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        if (window.confirm("Deseja manda ele embora?"))
                          removeDragon(item?.id);
                      }}
                    >
                      <DeleteIcon sx={{ fontSize: 32 }} />
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </C.Container>
    </>
  );
}
