import React from "react";
import styled from "styled-components";
import style from "../global-style";
import Icon1 from "../img/Ellipse_18.svg";
import Icon2 from "../img/Ellipse_24.svg";
import Icon3 from "../img/Ellipse_25.svg";
import { Link } from "react-router-dom";
const Section = styled.div`
  text-align: center;
  padding: 5rem;
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
    color: ${style["font-color-dark"]};
  }
  .description,
  .text {
    color: ${style["font-color-light-2"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-s"]};
    margin-bottom: 2rem;
    &__highlight {
      color: ${style["highlight-color"]};
      /* transition: all 0.2s; */
    }
    &__highlight:hover {
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
  .text {
    width: 50%;
    margin: 3rem auto;
    line-height: ${style["line-height-m"]};
  }
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4rem;
    padding: 2rem 10rem;
    color: ${style["font-color-light-1"]};
    a {
      color: inherit;
    }
    &__card--1 {
      background-color: ${style["theme-color-primary"]};
      transition: background-color 0.2s;
    }
    &__card--1:hover {
      background-color: ${style["theme-color-primary-2"]};
    }
    &__card--1:hover .arrow--1 {
      path {
        fill: ${style["highlight-color"]};
      }
    }

    &__card--2 {
      background-color: ${style["theme-color-secondary"]};
      transition: background-color 0.2s;
    }
    &__card--2:hover {
      background-color: ${style["theme-color-secondary-2"]};
    }
    &__card--2:hover .arrow--2 {
      path {
        fill: ${style["theme-color-secondary-3"]};
      }
    }
    &__card--3 {
      background-color: ${style["theme-color-tertiary"]};
      transition: background-color 0.2s;
    }
    &__card--3:hover {
      background-color: ${style["theme-color-tertiary-2"]};
    }
    &__card--3:hover .arrow--3 {
      path {
        fill: ${style["theme-color-tertiary-3"]};
      }
    }
  }
`;
const Card = styled.div`
  padding: 6rem;
  border-radius: 3rem;

  cursor: pointer;
  .feature {
    color: ${style["font-color-light-1"]};

    &__icon {
      width: 6rem;
      margin-bottom: 3.5rem;
    }
    &__title {
      font-size: ${style["font-size-l"]};
      margin-bottom: 1.5rem;
      font-weight: bold;
    }
    &__text {
      font-size: ${style["font-size-m"]};
      margin-bottom: 4rem;
      line-height: ${style["line-height-m"]};
    }
  }

  .arrow {
    &--1 {
      transition: color 0.2s;
    }
    &--2 {
      transition: color 0.2s;
    }
    &--3 {
      transition: color 0.2s;
    }
  }
`;
function Features() {
  const arrowIcon = (
    <svg
      t="1593744780656"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7211"
      width="25"
      height="25"
    >
      <path
        d="M755 416H160q-14 0-23-9t-9-23 9-23 23-9h595L521 119q-9-10-9-23t9.5-22.5T544 64t23 9l288 288q9 10 9 23t-9 23L567 695q-10 9-23 9t-22.5-9.5T512 672t9-23z"
        p-id="7212"
        fill="#D3D3D3"
      ></path>
    </svg>
  );
  return (
    <Section>
      <div className="title">来聊聊吧</div>
      <div className="description">
        最私密，最暖心的倾听陪伴 | 足不出户就能得到的心灵支持
      </div>
      <div className="features">
        <a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default">
          <Card className="features__card--1 feature">
            <img src={Icon1} className="feature__icon" alt="feature icon" />
            <div className="feature__title">匿名文字倾诉</div>
            <div className="feature__text">
              随时随地匿名畅谈 | 全球优质同伴支持
            </div>
            <div className="arrow arrow--1"> {arrowIcon} </div>
          </Card>
        </a>
        <Link to="/mentors">
          <Card className="features__card--2 feature">
            <img src={Icon2} className="feature__icon" alt="feature icon" />
            <div className="feature__title">和TA语音/视频</div>
            <div className="feature__text">
              找到你的专属Buddy, 有TA一路陪你成长
            </div>
            <div className="arrow arrow--2">{arrowIcon}</div>
          </Card>
        </Link>
        <Link to="/training">
          <Card className="features__card--3 feature">
            <img src={Icon3} className="feature__icon" alt="feature icon" />
            <div className="feature__title">7 天人生解压舱</div>
            <div className="feature__text">
              线上团体互助空间，和有趣的TA们一同穿越人生盲点
            </div>
            <div className="arrow arrow--3">{arrowIcon}</div>
          </Card>
        </Link>
      </div>
      <div className="text">
        BeenThere 是一个由志愿者组成的互助倾听组织，不提供专业的医疗服务，
        如有需要，建议您接受相关专业服务，或是拨打网站上免费专业的
        <Link to="/hotline" className="text__highlight">
          &nbsp;[心理支持服务热线]
        </Link>
        我们在意您的安全和健康，很希望帮到您!
      </div>
    </Section>
  );
}
export default React.memo(Features);
