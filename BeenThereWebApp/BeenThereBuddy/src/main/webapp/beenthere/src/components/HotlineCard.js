import React, { useState } from "react";
import styled from "styled-components";
import style from "../global-style";
import Button from "./Button";
import { Link } from "react-router-dom";
import Image from "../img/Ellipse_64.png";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.showStatus ? 1 : 0)};
  visibility: ${(props) => (props.showStatus ? "visible" : "hidden")};
  z-index: 1000;

  transition: all 0.2s;

  .card {
    width: 30%;
    height: 35rem;
    padding: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: ${style["font-size-s"]};
    &__img {
      flex: 1;
      margin: auto;
      img {
        width: 100%;
      }
    }
    &__text {
      flex: 1;
      text-align: center;
      font-size: ${style["font-size-m"]};
      line-height: ${style["line-height-m"]};
      span {
        display: block;
      }
      &--highlight {
        font-weight: bold;
      }
    }
    .button {
      flex: 1;
      display: flex;
      align-items: flex-end;
    }
  }
  .icon {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 10%;
    top: 8%;
    cursor: pointer;
    &:hover path {
      fill: ${style["highlight-color"]};
    }
  }
`;

function HotlineCard(props) {
  const { showStatus } = props;
  const { handleCloseHotline } = props;

  const closeIcon = (
    <svg
      t="1593724592923"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="9295"
      width="200"
      height="200"
    >
      <path
        d="M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"
        p-id="9296"
        fill="#a5a5a5"
      ></path>
    </svg>
  );
  return (
    <Container showStatus={showStatus}>
      <div className="card">
        <a href="#" onClick={handleCloseHotline}>
          {closeIcon}
        </a>
        <div className="card__img">
          <img src={Image} alt="hotline image" />
        </div>
        <div className="card__text">
          <span>我们也为你准备了</span>
          <span className="card__text--highlight">
            免费专业的心理支持服务热线
          </span>
          <span>希望能帮到你</span>
        </div>
        <Link to="/hotline">
          <div className="button">
            <Button>去看看</Button>
          </div>
        </Link>
      </div>
    </Container>
  );
}
export default React.memo(HotlineCard);
