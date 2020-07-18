import React from "react";
import { GlobalStyle } from "./style";
import webRoutes from "./webApp/routes/index";
import mobileRoutes from "./mobileApp/routes/index";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import store from "./webApp/redux/index";
import { ScrollContext } from "react-router-scroll-4";

import { BrowserRouter } from "react-router-dom";

import Media from "react-media";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollContext>
          <Provider store={store}>
            <GlobalStyle></GlobalStyle>
            <Media query="(max-width: 450px)">
              {(matches) =>
                matches ? renderRoutes(mobileRoutes) : renderRoutes(webRoutes)
              }
            </Media>
          </Provider>
        </ScrollContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
