import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./CSS/index.css";
import { createStore } from "redux";
import reducersBefore from "./reducers";
import { Provider } from "react-redux";
import reducers from "./modules";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
