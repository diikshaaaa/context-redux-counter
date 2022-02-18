import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CountProvider } from './context/context1';

ReactDOM.render(
  <React.StrictMode>
    <CountProvider store={store}>
      <App />
    </CountProvider>
  </React.StrictMode>,
  document.getElementById("root")
);