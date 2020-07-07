import React from "react";
import style from "../global-style";
import styled from "styled-components";
import Logo from "../img/logo.svg";
import LogoWord from "../img/logo-word.svg";
import QRcode from "../img/二维码.png";
import { Link } from "react-router-dom";
const Section = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 3rem 2rem;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : style["background-color-grey"]};
  font-size: ${style["font-size-s"]};
  line-height: ${style["line-height-l"]};

  .logo {
    &__img {
      width: 4rem;
    }
    &__word {
      height: 4rem;
    }

    &__description {
      color: ${(props) =>
        props.fontColor2 ? props.fontColor2 : style["font-color-light-2"]};
      padding-left: 0.8rem;
      /* line-height */
    }
  }
  .footer {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    &__text {
      margin-bottom: 1.4rem;
      color: ${(props) =>
        props.fontColor2 ? props.fontColor2 : style["font-color-light-2"]};

      font-size: inherit;
    }

    &__item {
      list-style: none;
    }
    &__link {
      &:link,
      &:visited {
        text-decoration: none;
        color: ${(props) =>
          props.fontColor1 ? props.fontColor1 : style["font-color-light-1"]};

        font-size: inherit;
      }
      &:hover {
        cursor: pointer;
        color: ${style["highlight-color"]};
      }
    }
    &__qrcode {
      width: 10vw;
      img {
        width: 100%;
      }
    }
  }
  .copyright {
    color: ${(props) =>
      props.fontColor2 ? props.fontColor2 : style["font-color-light-2"]};
    border-top: 1px solid
      ${(props) =>
        props.fontColor2 ? props.fontColor2 : style["font-color-light-2"]};
    padding-top: 1.5rem;
    text-align: center;
    width: 80%;
    flex: 0 0 1;
    order: 1;
    font-size: inherit;
  }
`;
function Footer(props) {
  const { fontColor1, fontColor2, backgroundColor } = props;
  return (
    <Section
      fontColor1={fontColor1}
      fontColor2={fontColor2}
      backgroundColor={backgroundColor}
    >
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo__img" />
          <img src={LogoWord} alt="word logo" className="logo__word" />
        </Link>
        <div className="logo__description">全球青年心灵互助社区</div>
      </div>

      <div className="footer">
        <p className="footer__text">倾听陪伴</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://tawk.to/chat/5d0cf96336eab972111899f7/default"
              className="footer__link"
            >
              匿名文字聊天
            </a>
          </li>
          <li className="footer__item">
            <Link to="/mentors" className="footer__link">
              和 TA 语音/视频
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/training" className="footer__link">
              7 天人生解压舱
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p className="footer__text">了解 Beenthere</p>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/family" className="footer__link">
              BeenThere 大家庭
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/join" className="footer__link">
              加入 BeenThere
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p className="footer__text">心理资源</p>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/hotline" className="footer__link">
              心理支持服务热线
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="footer__qrcode">
          <img src={QRcode} alt="QR code" />
        </div>
      </div>
      <div className="copyright">
        @copyright BeenThere 2020. Designed By xxxx | Powered By xxx
      </div>
    </Section>
  );
}
export default React.memo(Footer);
