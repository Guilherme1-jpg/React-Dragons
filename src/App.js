import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./assistant/theme";

import UserRoute from "./RoutesList";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
