import React, { useState } from "react";
import styled from "styled-components";
import style from "../../global-style";
import { CSSTransition } from "react-transition-group";
import Footer from "../../components/Footer";
import BuddyIntroBoard from "../../components/BuddyIntroBoard";
import ThankCard from "../../components/ThankCard";
import BuddyVideo from "../../components/BuddyVideo";
import BuddyArticle from "../../components/BuddyArticle";
import BuddyQuoteBoard from "../../components/BuddyQuoteBoard";
import Checklist from "../../components/Checklist";
import HotlineCard from "../../components/HotlineCard";
const Section = styled.div`
  width: 100%;
  /* z-index: 100; */

  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;
const HeaderContainer = styled.div`
  position: fixed;
  padding: 2rem;
  /* padding-top: 0; */
  height: ${style["line-height-m"]};
  width: 100vw;
  /* height: 100vh; */
  /* z-index: 100; */
  display: flex;
  line-height: ${style["line-height-m"]};
  color: ${style["highlight-color"]};
  background-color: ${style["background-color-white"]};
  > h1 {
    margin: 0;
    font-size: ${style["font-size-m"]};
    font-weight: bold;
    height: 100vh;
    cursor: pointer;
  }
`;

function Mentor(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showHotline, setShowHotline] = useState(false);
  const handleReturn = () => {
    setShowStatus(false);
  };
  const handleShowChecklist = (e) => {
    e.preventDefault();

    e.stopPropagation();
    setShowChecklist(true);
  };
  const handleCloseChecklist = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowChecklist(false);
    setShowHotline(true);
  };
  const handleCloseHotline = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowHotline(false);
  };
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Section>
        <HeaderContainer onClick={handleReturn}>
          <h1> &larr; 返回</h1>
        </HeaderContainer>

        <BuddyIntroBoard handleShowChecklist={handleShowChecklist} />

        <BuddyVideo />

        <BuddyVideo />
        <BuddyArticle />
        <ThankCard />
        <BuddyQuoteBoard handleShowChecklist={handleShowChecklist} />
        <Footer />
        <Checklist
          showStatus={showChecklist}
          handleCloseChecklist={handleCloseChecklist}
        />
        <HotlineCard
          showStatus={showHotline}
          handleCloseHotline={handleCloseHotline}
        />
      </Section>
    </CSSTransition>
  );
}
export default React.memo(Mentor);
