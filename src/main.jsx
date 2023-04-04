import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: consolas;
}
`;

const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(min-width: 425px) and (max-width: 625px)",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
