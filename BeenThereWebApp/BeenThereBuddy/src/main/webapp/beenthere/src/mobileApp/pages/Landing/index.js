import React, { useEffect, useState } from "react";
import { Container } from "./style";

import Image2 from "../../../img/资源_18@2x_1.png";

import { Link } from "react-router-dom";
import Introduction from "./components/Introduction";
import BuddyInfo from "./components/BuddyInfo";
import Features from "./components/Features";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
function Landing(props) {
  const [showBackground, setShowBackground] = useState(false);
  const changeBarBackground = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    // console.log(showBackground);
    if (scrollTop > 40) {
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
  const [menu, setMenu] = useState(false);
  const handleOpenMenu = (e) => {
    e.preventDefault();

    e.stopPropagation();

    setMenu(true);
  };
  const handleCloseMenu = (e) => {
    setMenu(false);
  };
  return (
    <Container onClick={handleCloseMenu} menu={menu}>
      <Header
        showBackground={showBackground}
        backgroundColor="#fdfdfd"
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        menu={menu}
      />
      <img src={Image2} alt="design responsive" className="photo" />
      <div className="title">全球青年心灵互助社区</div>
      <Features />
      <Introduction />
      <BuddyInfo />
      <Footer />
    </Container>
  );
}
export default Landing;
