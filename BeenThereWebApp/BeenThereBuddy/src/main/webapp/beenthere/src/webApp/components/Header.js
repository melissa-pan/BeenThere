import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "../global-style";

import LogoWord from "../../img/logo-word.png";
const Section = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  line-height: 7rem;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) =>
    props.showBackground ? props.backgroundColor : `transparent`};
  font-size: ${style["font-size-m"]};
  &__logo {
    height: 100%;
  }
  /* @media (max-width: 56.25em) {
    flex-direction: column;
  } */
  .logo {
    vertical-align: middle;
    display: inline-block;
    /* margin: auto 0; */
    height: 6rem;
  }
  a {
    /* padding: 1rem 0; */
    font-size: inherit;
    color: ${(props) =>
      props.fontColor ? props.fontColor : style["font-color-light-1"]};

    /* cursor: pointer; */
    &:hover {
      color: ${style["highlight-color"]};
    }
    &.selected {
      color: ${style["highlight-color"]};
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }

  .btn {
    border: 1px solid ${style["highlight-color"]};
    color: ${style["highlight-color"]};
    border-radius: 3rem;
    background-color: transparent;
    padding: 1rem 2rem;
    transition: all 0.2s;
    outline: none;
    font-size: inherit;
    cursor: pointer;
    &:hover {
      background-color: ${style["highlight-color"]};
      color: ${style["background-color-white"]};
    }
  }
`;
export default function Header(props) {
  const { showBackground, fontColor, backgroundColor } = props;
  return (
    <Section
      showBackground={showBackground}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    >
      <NavLink to="/" exact className="header__logo ">
        <img src={LogoWord} alt="word logo" className="logo" />
      </NavLink>

      <NavLink to="/" exact activeClassName="selected">
        首页
      </NavLink>

      <a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default">
        匿名文字倾诉
      </a>
      {/* <NavLink to="/mentors" activeClassName="selected">
        和 TA 语音/视频
      </NavLink>

      <NavLink to="/psgmeeting" activeClassName="selected">
        7 天人生解压舱
      </NavLink> */}

      <NavLink to="/family" activeClassName="selected">
        BeenThere 大家庭
      </NavLink>

      {/* <NavLink to="/join" activeClassName="selected">
        加入 BeenThere
      </NavLink> */}
      {/* 
      <NavLink to="/login" activeClassName="selected">
        <button className="btn">注册/登录</button>
      </NavLink> */}
    </Section>
  );
}
