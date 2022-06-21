import "@fontsource/inter";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ChakraProvider,
  ColorModeProvider,
  ThemeProvider,
} from "@chakra-ui/react";
import { thema } from "./styles/thema";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={thema}>
      <ChakraProvider theme={thema} resetCSS>
        <ColorModeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ColorModeProvider>
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
