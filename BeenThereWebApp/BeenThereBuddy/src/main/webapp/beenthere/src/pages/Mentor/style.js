import style from "../../global-style";
import styled from "styled-components";
export const Section = styled.div`
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
export const HeaderContainer = styled.div`
  position: fixed;
  padding: 2rem;
  /* padding-top: 0; */
  height: 30px;
  width: 100vw;
  /* height: 100vh; */
  /* z-index: 100; */
  display: flex;
  line-height: ${style["line-height-m"]};
  color: ${style["highlight-color"]};
  background-color: ${style["background-color-white"]};
  z-index: 100;
  > h1 {
    margin: 0;
    font-size: ${style["font-size-m"]};
    font-weight: bold;
    height: 100vh;
    cursor: pointer;
  }
`;
