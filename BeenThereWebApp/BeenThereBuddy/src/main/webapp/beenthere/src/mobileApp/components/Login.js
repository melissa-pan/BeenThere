import React, { useState } from "react";
import style from "../global-style";
import styled from "styled-components";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const Section = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  color: ${style["font-color-light-2"]};
  height: 100vh;
  width: 100vw;
  position: relative;

  .card {
    width: 32vw;
    height: 70%;
    position: absolute;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${style["background-color-white"]};
  }
  .title {
    a {
      font-size: ${style["font-size-ls"]};
      color: ${style["font-color-light-2"]};
      cursor: pointer;
      &:hover {
        color: ${style["highlight-color"]};
      }
      &.selected {
        color: ${style["highlight-color"]};
        border-bottom: 1px solid ${style["highlight-color"]};
      }
    }
  }
  .description {
    font-size: ${style["font-size-ss"]};
    a {
      &:link,
      &:visited {
        color: ${style["highlight-color"]};
        font-size: inherit;
      }
    }
  }
  .login {
    display: flex;
    flex-direction: column;
    font-size: ${style["font-size-s"]};
    /* margin: 0 auto; */
    /* justify-content: center; */
    /* padding: 0 1rem; */
    /* width: 100%; */
    &__row {
      display: flex;
      border-bottom: 0.5px solid ${style["font-color-light-2"]};
      margin-bottom: 1.2rem;
      padding: 0.1rem;
      align-items: center;
    }
    &__input {
      border: none;
      width: 100%;
      padding: 1rem;
      font-size: inherit;
      /* margin-bottom: 1rem; */
      &:focus {
        outline: none;
      }
    }
    &__button {
      color: ${style["highlight-color"]};
      padding: 0.5rem 1.6rem;
      flex: 0 0 35%;
      font-size: inherit;
      border: none;
      background-color: transparent;
      border-radius: 1.5rem;
      cursor: pointer;
      font-weight: bold;
      &--1 {
        padding-right: 0;
      }
      &--2 {
        background-color: ${style["theme-color-primary"]};
        transition: all 0.2s;
      }
      &--2:hover {
        background-color: ${style["theme-color-primary-2"]};
      }
    }
    &__wechat {
      width: 4rem;
      height: 4rem;
      background-color: red;
    }
    &__mentor {
      color: ${style["highlight-color"]};
      cursor: pointer;
    }
    &__third-party {
      width: 70%;
      /* margin-left: 50%; */
      font-size: ${style["font-size-s"]};
      color: inherit;
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      align-items: center;
      grid-column-gap: 1.5rem;
      &::after {
        content: "";
        height: 1px;
        display: block;
        background-color: currentColor;
      }
      &::before {
        content: "";
        height: 1px;
        display: block;
        background-color: currentColor;
      }
    }
  }
`;
const NarrowButton = styled(Button)`
  padding: 0.8rem 6.7rem;
  color: ${style["font-color-light-2"]};
`;
function Login(props) {
  // console.log(props.route);
  const [showSignUp, setSignUp] = useState(true);
  const [phone, setPhone] = useState("");
  const [validCode, setValidCode] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log(props.route);
  const renderLogin = () => {
    return (
      <form className="login" onSubmit={handleSubmit}>
        <div className=" login__row">
          <i className="login__icon">iii</i>
          <span className="login__zip">zip</span>
          <input
            type="text"
            value={phone}
            onChange={handleChange}
            required
            name="input"
            placeholder="请输入手机号"
            className="login__input"
          />
          <button className="login__button login__button--1">邮箱登录</button>
        </div>
        <div className="login__row">
          <i className="login__icon">iii</i>
          <input
            type="text"
            value={validCode}
            onChange={handleChange}
            name="validCode"
            placeholder="请提交验证码"
            className="login__input"
          />
          <button className="login__button login__button--2">获取验证码</button>
        </div>
        <div className="login__row">
          <i className="login__icon">iii</i>
          <input
            type="text"
            value={password}
            onChange={handleChange}
            name="passport"
            placeholder="设置密码"
            className="login__input"
          />
        </div>

        <NarrowButton onClick={() => {}}>登录</NarrowButton>
      </form>
    );
  };
  return (
    <Section>
      <div className="card">
        <div className="title">
          <NavLink to="/signup" activeClassName="selected">
            注册 &nbsp;
          </NavLink>
          <NavLink to="/login" activeClassName="selected">
            登录
          </NavLink>
        </div>
        {props.route.path === "/login" ? renderLogin() : null}
        <div className="description">
          登录代表您已同意BeenThere的<a href="#">《使用协议》</a>和{" "}
          <a href="#">《隐私协议》</a>
        </div>
        <div className="login__third-party">第三方登录</div>
        <i className="login__wechat">wechat</i>
        <div className="login__mentor" onClick={() => {}}>
          我是 Buddy >
        </div>
      </div>
    </Section>
  );
}

export default React.memo(Login);
