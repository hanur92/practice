import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import App from "./containers/App";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
