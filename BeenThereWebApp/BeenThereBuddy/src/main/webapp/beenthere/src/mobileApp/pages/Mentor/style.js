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

    height: 80px;
    background: ${style["background-color-white"]};
    display: flex;
    align-items: center;
    z-index: 500;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 5px;
    &--1 {
      height: ${(props) => (props.showPrice ? "260px" : "125px")};
    }
    .text {
      color: ${style["font-color-light-1"]};
      font-size: ${style["font-size-s"]};
      line-height: ${style["line-height-s"]};
      margin-bottom: 5px;
      &--highlight {
        font-size: ${style["font-size-sm"]};
        color: ${style["highlight-color"]};
        font-weight: bold;
      }
    }
    .price {
      &--text {
        text-align: center;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-light-1"]};
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        margin: 0 auto;
        .icon {
          width: 30px;
          height: 30px;
          transform: ${(props) =>
            props.showPrice ? "rotate(90deg)" : "rotate(-90deg)"};
        }
      }
    }
    & > a {
      width: 80%;
      margin: 0 auto;
    }
    .button {
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
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: ${style["line-height-m"]};
  color: ${style["font-color-light-1"]};
  background-color: ${style["background-color-white"]};
  z-index: 100;
  margin: 0;
  font-size: ${style["font-size-l"]};
  font-weight: bold;
  text-align: center;
  .icon {
    cursor: pointer;
  }
  & > span {
    text-align: center;
    flex: 0 0 85%;
    letter-spacing: 0.02em;
  }
`;

export const PriceCard = styled.div`
  width: 290px;
  height: 120px;
  border-radius: 15px;
  background: ${style["theme-color-primary"]};
  margin: 0 auto;
  padding: 30px 35px;
  font-weight: bold;
  font-size: ${style["font-size-m"]};
  display: flex;
  display: ${(props) => (props.showPrice ? "block" : "none")};
  /* align-items: center; */
  justify-content: space-evenly;
  flex-direction: column;
  .service {
    display: flex;

    &--type {
      color: ${style["highlight-color"]};
      line-height: ${style["line-height-l"]};
      margin-right: 20px;
    }
    &--price {
      color: ${style["font-color-light-2"]};
      line-height: ${style["line-height-l"]};
    }
    &--hot {
      &::after {
        content: "超值";
        background: red;
        font-size: ${style["font-size-ss"]};
        line-height: ${style["line-height-ll"]};
        color: ${style["background-color-white"]};
        border-radius: 10px;
        padding: 2px 5px;
        margin-left: 5px;
      }
    }
  }
`;
