import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";
import "./style/main.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <div className="body">
        <App />
      </div>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
