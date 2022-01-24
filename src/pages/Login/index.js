import React, { useState } from "react";

import * as C from "./styled";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FaceIcon from "@mui/icons-material/Face";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { RoutesList } from "../../RoutesList";
import { useNavigate } from "react-router-dom";
import Dragoneating from "../../assets/images/dragon-eating.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {"Copyright © "}
      <Link color="#456990" href="https://github.com/Guilherme1-jpg">
        Feito com ♥ por Guilherme
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: "user@gmail.com",
    password: 1234,
  };

  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    if (email !== user.email && password !== user.password) {
      alert("Inserir usuario correto");
    } else {
      event.preventDefault();
      navigate(RoutesList.HOME);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${Dragoneating})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[5]
                : t.palette.grey[300],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={8} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: "warning.main" }}>
              <FaceIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Entre nesse Aventura
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={onSubmitLogin}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Digite seu Email"
                name="email"
                autoComplete="email"
                variant="standard"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                variant="standard"
                name="password"
                label="Digite sua senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                color="warning"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <C.Abbr>
                  <p>
                    Email:user@gmail.com <br /> senha: 1234
                  </p>
                </C.Abbr>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
