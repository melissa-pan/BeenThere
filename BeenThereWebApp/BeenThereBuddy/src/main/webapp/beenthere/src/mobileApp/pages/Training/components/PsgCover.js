import React from "react";

import styled from "styled-components";
import style from "../../../global-style";
import Earth from "../../../../img/earth.png";
import Rocket from "../../../../img/rocket3.png";
import Satellitelarge from "../../../../img/satellitelarge.png";
import Earthland from "../../../../img/earthland0.25.png";
import DayIcon from "../../../../img/7.png";
const Container = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  padding-top: 70px;
  z-index: 0;
  overflow: hidden;

  .earthContainer {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    .earth {
      width: 162px;
      height: 162px;
    }
    .earthLand {
      position: absolute;
      right: -1rem;
      bottom: -1rem;
      width: 162px;
      height: 162px;
    }
  }

  .rocket {
    position: absolute;
    left: 0;
    bottom: 6rem;
    z-index: 2;
    width: 115px;
    height: 76px;
  }
  .satellite {
    transform: rotate(90deg);
    position: absolute;
    right: 25%;
    top: 10%;
    z-index: -1;
    width: 62.5px;
    height: 62.5px;
  }
  .cover {
    width: 75%;
    height: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 3px solid ${style["color-yellow-3"]};
    z-index: 1;
    border-radius: 5px;
    text-align: right;
    padding-right: 5%;
    position: relative;

    &--day,
    &--title {
      font-size: 32px;
      letter-spacing: 0.07em;
      color: ${style["color-yellow-3"]};
      margin-bottom: 5px;
      position: relative;
    }
    &--sub {
      font-size: 18.75px;
      letter-spacing: 0.07em;
      font-family: "Yu Gothic UI";
      color: ${style["highlight-color"]};
      margin-bottom: 5px;
    }
    &--des {
      font-size: 6.25px;
      letter-spacing: 0.07em;
      font-family: "Yu Gothic UI";
      color: ${style["color-yellow-3"]};
    }
    .dayIcon {
      position: absolute;
      left: 12%;
      top: 32%;
      width: 34px;
    }
    &--day {
      position: absolute;
      left: 24%;
      top: 60%;
    }
  }
`;
export default function PsgCover() {
  return (
    <Container>
      <img src={Rocket} alt="" className="rocket" />
      <div className="cover">
        <img src={DayIcon} alt="" className="dayIcon" />

        <div className="cover--title">
          <span className="cover--day">天</span>人生解压舱
        </div>
        <div className="cover--sub">空降BeenThere</div>
        <div className="cover--des">源自哈佛的全球青年心灵互助社区</div>
      </div>
      <div className="earthContainer">
        <img src={Earth} alt="" className="earth" />
        <img src={Earthland} alt="" className="earthLand" />
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
