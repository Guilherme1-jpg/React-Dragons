import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    dark: {
      main: "#121212",
      contrastText: "#FFF",
    },
    light: {
      main: "#fff",
      contrastText: "#121212",
    },
  },
});

export default theme;
