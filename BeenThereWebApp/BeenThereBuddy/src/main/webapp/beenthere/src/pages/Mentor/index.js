import React, { useState } from "react";
import styled from "styled-components";
import style from "../../global-style";
import { CSSTransition } from "react-transition-group";
import Footer from "../../components/Footer";
const Section = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  width: 100%;
  z-index: 100;
  /* font-size: 20rem; */
  /* overflow: hidden; */
  /* background: #f2f3f4; */
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
  padding: 4rem;
  /* padding-top: 0; */
  height: ${style["line-height-m"]};
  width: 100%;
  /* z-index: 100; */
  display: flex;
  line-height: ${style["line-height-m"]};
  color: ${style["highlight-color"]};

  > h1 {
    margin: 0;
    font-size: ${style["font-size-m"]};
    font-weight: bold;
    height: 100%;
    cursor: pointer;
  }
`;
function Mentor(props) {
  const [showStatus, setShowStatus] = useState(true);
  // console.log("memtor");
  const handleReturn = () => {
    setShowStatus(false);
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
        Mentor
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Section>
    </CSSTransition>
  );
}
export default React.memo(Mentor);
