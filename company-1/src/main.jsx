import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextAPI from "./Context/ContextAPI";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextAPI>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextAPI>
);
