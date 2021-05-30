import { App } from "./app";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
