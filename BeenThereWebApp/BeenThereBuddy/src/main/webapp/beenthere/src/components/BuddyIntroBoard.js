import React from "react";

import style from "../global-style";
import styled from "styled-components";

import Image from "../img/lexi_photo2.png";
import mentor_vector_2 from "../img/mentor_vector_2.svg";
import mentor_vector_1 from "../img/mentor_vector_1.svg";
import Button from "../components/Button";

const avatarList = [
  "1.png",
  "2.jpg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpeg",
  "15.jpeg",
  "16.jpg",
  "17.jpeg",
  "18.jpg",
  "19.jpeg",
  "20.png",
  "21.jpeg",
  "22.jpg",
  "23.png",
  "24.jpeg",
  "25.jpg",
  "26.jpg",
  "27.jpeg",
  "28.jpg",
  "29.jpeg",
  "30.jpeg",
  "31.jpeg",
];
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
    .avatar {
      width: 100%;
      border-radius: 50%;
    }
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
    font-weight: bold;
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
  const { handleShowChecklist } = props;
  const { buddyInfo } = props;
  const { id } = buddyInfo;
  return (
    // <div></div>
    <Section>
      <div className="image">
        <img
          className="avatar"
          src={`/avatars/${avatarList[id - 1]}`}
          alt="buddy"
        />
        <img src={mentor_vector_1} className="mentor-vector--1" />
        <img src={mentor_vector_2} className="mentor-vector--2" />
      </div>
      <BuddyInfor className="buddyInfor">
        <div className="title">
          Hi! 我是 <span className="name">{buddyInfo.name}</span>
        </div>
        <div className="description">
          <p>#{buddyInfo.info}</p>
          <p>#{buddyInfo.desc}</p>
          <p>#{buddyInfo.region}</p>
          <p>
            自加入BeenThere以来已经行 <span className="number">40</span> 次咨询
          </p>
        </div>
        <div className="label-box">
          <div className="area">
            <div className="label">擅长领域</div>
          </div>
          <div className="label--list">
            {buddyInfo.tag.length !== 0
              ? buddyInfo.tag.map((item, index) => (
                  <p className="label--item" key={index}>
                    {item}
                  </p>
                ))
              : null}
          </div>
        </div>

        {/* <div className="label-box">
          <div className="area">
            <div className="label">TA的勋章</div>
          </div>
          <div className="label--list">
            <img src={ImageA1} alt="buddy image" className="label--img" />
            <img src={ImageA2} alt="buddy image" className="label--img" />
            <img src={ImageA3} alt="buddy image" className="label--img" />
            <img src={ImageA4} alt="buddy image" className="label--img" />
          </div>
        </div> */}
        {buddyInfo.service ? (
          <React.Fragment>
            <a href="#" onClick={handleShowChecklist}>
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
            <a href="#" onClick={handleShowChecklist}>
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
          </React.Fragment>
        ) : (
          <p>暂未开通语音/视频服务</p>
        )}
      </BuddyInfor>
    </Section>
  );
}
export default React.memo(BuddyIntroBoard);
