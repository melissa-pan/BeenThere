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
  .appointment {
    position: fixed;
    bottom: 0;
    width: 100vw;

    height: 70px;
    background: ${style["background-color-white"]};
    display: flex;
    align-items: center;
    & > a {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
export const SideBar = styled.aside`
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  padding: 15px auto;
  position: absolute;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  li {
    list-style: none;
  }
  a {
    /* cursor: pointer; */
    text-decoration: none;
    color: ${style["font-color-light-1"]};
    font-size: ${style["font-size-m"]};
    &:hover {
      color: ${style["highlight-color"]};
    }
    &.selected {
      color: ${style["highlight-color"]};
    }
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  padding: 20px;
  height: 60px;
  width: 100%;
  display: flex;
  line-height: ${style["line-height-m"]};
  color: ${style["highlight-color"]};
  background-color: ${style["background-color-white"]};
  z-index: 100;
  > h1 {
    margin: 0;
    font-size: ${style["font-size-m"]};
    font-weight: bold;
    height: 30px;
    cursor: pointer;
  }
`;
