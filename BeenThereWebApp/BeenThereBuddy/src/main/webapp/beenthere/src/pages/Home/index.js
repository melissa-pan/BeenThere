import React, { useState, useEffect } from "react";
import { renderRoutes } from "react-router-config";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
function Home(props) {
  const [showBackground, setShowBackground] = useState(false);
  const { route } = props;
  const changeBarBackground = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    // console.log(showBackground);
    if (scrollTop > 100) {
      if (!showBackground) {
        setShowBackground(true);
      }
    } else {
      if (showBackground) {
        setShowBackground(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", changeBarBackground);
    return () => {
      document.removeEventListener("scroll", changeBarBackground);
    };
  }, [showBackground]);

  return (
    <div>
      <Header showBackground={showBackground} backgroundColor="#fdfdfd" />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}
export default React.memo(Home);
