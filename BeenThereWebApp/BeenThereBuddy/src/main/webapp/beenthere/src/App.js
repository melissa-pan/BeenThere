import React from "react";
import { GlobalStyle } from "./style";
import routes from "./routes/index";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import store from "./redux/index";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </Provider>
    </div>
  );
}

export default App;
