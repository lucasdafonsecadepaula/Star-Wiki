import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/DataProvider";
import { ModalProvider } from "./context/ModalProvider";
import { SearchProvider } from "./context/SearchProvider";

ReactDOM.render(
  <DataProvider>
    <SearchProvider>
      <ModalProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ModalProvider>
    </SearchProvider>
  </DataProvider>,
  document.getElementById("root")
);
