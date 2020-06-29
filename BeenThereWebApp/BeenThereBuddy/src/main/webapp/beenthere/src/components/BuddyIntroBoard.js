import React from "react";

import style from "../global-style";
import styled from "styled-components";

import Image from "../img/lexi_photo2.png";
import ImageA1 from "../img/Ellipse25.png";
import ImageA2 from "../img/Ellipse24.png";
import ImageA3 from "../img/Ellipse60.png";
import ImageA4 from "../img/Ellipse18.png";
import mentor_vector_2 from "../img/mentor_vector_2.svg";
import mentor_vector_1 from "../img/mentor_vector_1.svg";
import Button from "../components/Button";
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  padding-top: 10rem;
  .image {
    flex: 0 0 35%;
    margin: 0 auto;
    padding: 0 10rem;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    .mentor-vector--1 {
      position: absolute;
      top: -10rem;
      left: 4rem;
      z-index: 0;
      width: 100%;
    }
    .mentor-vector--2 {
      position: absolute;
      top: 12rem;
      left: 40rem;
      width: 50%;
      z-index: 0;
    }
  }
  .buddyInfor {
    flex: 0 0 50%;
    padding: 2rem 10rem;
  }
`;

const BuddyInfor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
    .name {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
  }
  .description {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 1.5rem;
    .number {
      color: ${style["highlight-color"]};
      font-size: ${style["font-size-ll"]};
    }
  }
  .area,
  .button,
  .label-box {
    margin-bottom: 1rem;
  }

  .donate {
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-s"]};
    text-align: center;
  }

  .label {
    width: 25%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-3"]};
    background: #f3f3ff;
    &--list {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
    }
    &--item {
      border-radius: 20px;
      background: ${style["theme-color-primary-2"]};
      font-size: ${style["font-size-s"]};
      height: 2rem;
      padding: 0.5rem 0.7rem;
      margin: 0.5rem;
    }
    &--img {
      margin: 0.5rem;
    }
  }
`;
function BuddyIntroBoard(props) {
  return (
    <Section>
      <div className="image">
        <img src={Image} alt="buddy image" />
        <img src={mentor_vector_1} className="mentor-vector--1" />
        <img src={mentor_vector_2} className="mentor-vector--2" />
      </div>
      <BuddyInfor className="buddyInfor">
        <div className="title">
          Hi! 我是<span className="name"> Lexi</span>
        </div>
        <div className="description">
          <p>#哈佛教育学院发展心理学硕士（在读）</p>
          <p>#投身教育的国家二级心理咨询师姐姐</p>
          <p>#坐标：美国东部</p>
          <p>
            自加入BeenThere以来已经行 <span className="number">40</span> 次咨询
          </p>
        </div>
        <div className="label-box">
          <div className="area">
            <div className="label">擅长领域</div>
          </div>
          <div className="label--list">
            <p className="label--item">擅长领域</p>
            <p className="label--item">擅长领域</p>
            <p className="label--item">擅长领域</p>
            <p className="label--item">擅长领域</p>
          </div>
        </div>

        <div className="label-box">
          <div className="area">
            <div className="label">TA的勋章</div>
          </div>
          <div className="label--list">
            <img src={ImageA1} alt="buddy image" className="label--img" />
            <img src={ImageA2} alt="buddy image" className="label--img" />
            <img src={ImageA3} alt="buddy image" className="label--img" />
            <img src={ImageA4} alt="buddy image" className="label--img" />
          </div>
        </div>

        <a href="#">
          <div className="button">
            <Button
              background="#a7a7ff"
              fontColor="#ffffff"
              hoverBackground="#9c9cff"
            >
              和TA语音 (xx 元/50分钟)
            </Button>
          </div>
        </a>
        <a href="#">
          <div className="button">
            <Button
              background="#9ec5ff"
              fontColor="#ffffff"
              hoverBackground="#9fcbff"
            >
              和TA视频 (xx 元/50分钟)
            </Button>
          </div>
        </a>
        <div className="donate">
          <p>*你在BeenThere购买的所有服务，都会有5%捐献给慈善组织</p>
        </div>
      </BuddyInfor>
    </Section>
  );
}
export default React.memo(BuddyIntroBoard);
