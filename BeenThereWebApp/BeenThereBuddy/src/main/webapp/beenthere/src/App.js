import React from "react";
import { GlobalStyle } from "./style";
import routes from "./routes/index";
import { renderRoutes } from "react-router-config";

function App() {
  return (
    <div className="app">
      <GlobalStyle></GlobalStyle>
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
