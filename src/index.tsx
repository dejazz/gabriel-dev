import "@fontsource/inter"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { thema } from "./styles/thema";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <ChakraProvider theme={thema} resetCSS>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);
