import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CountProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <CountProvider>
      <App />
    </CountProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);