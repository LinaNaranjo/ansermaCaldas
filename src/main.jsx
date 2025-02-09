import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter";
import store from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
