import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import Router from "./layouts/Router";
import { ContextContainer } from "./context";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>

      <ContextContainer>
        <Router />
      </ContextContainer>

  </React.StrictMode>,
  document.getElementById("root")
);
/*
                ->Edit
Sign -> Profile ->OverView
                ->Calendar
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
