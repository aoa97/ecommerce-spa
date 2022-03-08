import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "boxicons"; // Needs connection
import "boxicons/css/boxicons.min.css";
import "./sass/main.scss";

import App from "./App";
// import './firebaseTest'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
