import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AllProviders from "./context/AllProviders";

ReactDOM.render(
  <AllProviders>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AllProviders>,
  document.getElementById("root")
);
