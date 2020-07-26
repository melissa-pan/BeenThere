import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "../global-style";
import Logo from "../../img/logo.png";

const Section = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  line-height: 60px;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) =>
    props.showBackground ? props.backgroundColor : `transparent`};
  font-size: ${style["font-size-m"]};
  .menu {
    height: 60px;
    display: flex;
    align-items: center;
  }
  &__logo {
    height: 40px;
  }

  .logo {
    vertical-align: middle;
    /* display: inline-block; */
    /* margin: auto 0; */
    height: 40px;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  height: 100%;
  width: 67%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  visibility: ${(props) => (props.menu ? "visible" : "hidden")};
  opacity: ${(props) => (props.menu ? 1 : 0)};
  transition: all 0.2s;
  a {
    color: ${style["font-color-light-1"]};
  }
`;
export default function Header(props) {
  const {
    showBackground,
    backgroundColor,
    handleOpenMenu,
    handleCloseMenu,
    menu,
  } = props;
  const menuIcon = (
    <svg
      t="1594846535434"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1989"
      width="40"
      height="40"
    >
      <path
        d="M808.96 330.24H215.04c-6.144 0-10.24-4.096-10.24-10.24v-30.72c0-6.144 4.096-10.24 10.24-10.24h593.92c6.144 0 10.24 4.096 10.24 10.24v30.72c0 6.144-4.096 10.24-10.24 10.24zM808.96 535.04H215.04c-6.144 0-10.24-4.096-10.24-10.24v-30.72c0-6.144 4.096-10.24 10.24-10.24h593.92c6.144 0 10.24 4.096 10.24 10.24v30.72c0 6.144-4.096 10.24-10.24 10.24zM808.96 739.84H215.04c-6.144 0-10.24-4.096-10.24-10.24v-30.72c0-6.144 4.096-10.24 10.24-10.24h593.92c6.144 0 10.24 4.096 10.24 10.24v30.72c0 6.144-4.096 10.24-10.24 10.24z"
        fill="#a5a5a5"
        p-id="1990"
      ></path>
    </svg>
  );

  return (
    <Section showBackground={showBackground} backgroundColor={backgroundColor}>
      <div className="menu" onClick={handleOpenMenu}>
        {menuIcon}
      </div>
      <NavLink to="/" exact>
        <img src={Logo} alt="logo" className="logo" />
      </NavLink>

      <Menu menu={menu}>
        <NavLink to="/" exact onClick={handleCloseMenu}>
          回到首页
        </NavLink>

        <a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default">
          匿名文字倾诉
        </a>
        {/* <NavLink to="/mentors" onClick={handleCloseMenu}>
          和 TA 语音/视频
        </NavLink>

        <NavLink to="/psgmeeting" onClick={handleCloseMenu}>
          7 天人生解压舱
        </NavLink> */}

        <NavLink to="/family" onClick={handleCloseMenu}>
          BeenThere 大家庭
        </NavLink>

        <NavLink to="/join" onClick={handleCloseMenu}>
          加入 BeenThere
        </NavLink>
      </Menu>
    </Section>
  );
}
