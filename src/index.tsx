import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./globalStyles";
import Providers from "./providers";
import Routes from "./routes";

ReactDOM.render(
  <Providers>
    <GlobalStyles />
    <Routes />
  </Providers>,
  document.getElementById("root")
);
