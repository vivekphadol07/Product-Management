import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { Store } from "./redux/Store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  </BrowserRouter>
);

