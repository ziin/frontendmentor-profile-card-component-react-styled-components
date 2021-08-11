import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StylesProvider } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
