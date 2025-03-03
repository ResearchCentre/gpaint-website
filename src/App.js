import React from "react";
import FullRouter from "./RouterPath/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "./Assets/style/style.css";

const theme = createTheme();

function App() {
  return (
    <>
      <div>
        <FullRouter />
      </div>
    </>
  );
}

export default App;