import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ScrollContext } from "react-router-scroll-4";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ScrollContext>
      <App />
    </ScrollContext>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
