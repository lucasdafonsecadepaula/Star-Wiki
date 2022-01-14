import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/DataProvider";

ReactDOM.render(
  <DataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </DataProvider>,
  document.getElementById("root")
);
