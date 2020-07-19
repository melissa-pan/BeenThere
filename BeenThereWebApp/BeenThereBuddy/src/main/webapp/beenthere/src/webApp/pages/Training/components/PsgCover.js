import React from "react";

import styled from "styled-components";
import style from "../../../global-style";
import Earth from "../../../../img/earth.png";
import Rocket from "../../../../img/rocket3.png";
import Satellitelarge from "../../../../img/satellitelarge.png";
import Earthland from "../../../../img/earthland0.25.png";
import DayIcon from "../../../../img/7.png";
const Container = styled.div`
  height: 63rem;
  width: 100%;
  position: relative;
  padding-top: 14rem;
  z-index: 0;
  overflow: hidden;
  .earthContainer {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .earthLand {
    position: absolute;
    right: -1rem;
    bottom: -1rem;
  }
  .rocket {
    position: absolute;
    left: 0;
    bottom: 6rem;
    z-index: 2;
  }
  .satellite {
    transform: rotate(90deg);
    position: absolute;
    right: 25%;
    top: 10%;
    z-index: -1;
  }
  .cover {
    width: 75%;
    height: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 10px solid ${style["color-yellow-3"]};
    z-index: 1;
    border-radius: 5px;
    text-align: right;
    padding-right: 10%;
    position: relative;

    @media (max-width: 56.25em) {
      border: 5px solid ${style["color-yellow-3"]};
    }

    &--day,
    &--title {
      font-size: 9rem;
      letter-spacing: 0.07em;
      color: ${style["color-yellow-3"]};
      margin-bottom: 1rem;
      position: relative;
      @media (max-width: 75em) {
        font-size: 8rem;
      }
      @media (max-width: 56.25em) {
        font-size: 7rem;
      }
      @media (max-width: 37.5em) {
        font-size: 6rem;
      }
    }
    &--sub {
      font-size: 5.6rem;
      letter-spacing: 0.07em;
      font-family: "Yu Gothic UI";
      color: ${style["highlight-color"]};
      margin-bottom: 1rem;
      @media (max-width: 75em) {
        font-size: 5rem;
      }
      @media (max-width: 56.25em) {
        font-size: 4.3rem;
      }
      @media (max-width: 37.5em) {
        font-size: 3.5rem;
      }
    }
    &--des {
      font-size: 2rem;
      letter-spacing: 0.07em;
      font-family: "Yu Gothic UI";
      color: ${style["color-yellow-3"]};
      @media (max-width: 75em) {
        font-size: 1.7rem;
      }
      @media (max-width: 56.25em) {
        font-size: 1.4rem;
      }
      @media (max-width: 37.5em) {
        font-size: 1.1rem;
      }
    }
    .dayIcon {
      position: absolute;
      left: 15%;
      top: 20%;
    }
    &--day {
      position: absolute;
      left: 27%;
      top: 60%;
    }
  }
`;
export default function PsgCover() {
  return (
    <Container>
      <img
        src={Rocket}
        alt=""
        style={{ width: "33rem", height: "21rem" }}
        className="rocket"
      />
      <div className="cover">
        <img
          src={DayIcon}
          alt=""
          style={{ width: "10rem" }}
          className="dayIcon"
        />

        <div className="cover--title">
          <span className="cover--day">天</span>人生解压舱
        </div>
        <div className="cover--sub">空降BeenThere</div>
        <div className="cover--des">源自哈佛的全球青年心灵互助社区</div>
      </div>
      <div className="earthContainer">
        <img
          src={Earth}
          alt=""
          style={{ width: "50rem", height: "50rem" }}
          className="earth"
        />
        <img
          src={Earthland}
          alt=""
          style={{ width: "50.5rem", height: "50.5rem" }}
          className="earthLand"
        />
      </div>
      <img
        src={Satellitelarge}
        alt=""
        style={{ width: "19rem", height: "19rem" }}
        className="satellite"
      />
    </Container>
  );
}
