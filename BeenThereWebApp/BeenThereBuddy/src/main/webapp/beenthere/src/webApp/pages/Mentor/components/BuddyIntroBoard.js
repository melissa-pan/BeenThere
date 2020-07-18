import React from "react";

import style from "../../../global-style";
import styled from "styled-components";

import mentor_vector_2 from "../../../../img/mentor_vector_2.svg";
import mentor_vector_1 from "../../../../img/mentor_vector_1.svg";
import Button from "../../../components/Button";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  padding-top: 10rem;
  flex-wrap: wrap;
  .image {
    flex: 0 0 35%;
    margin: 0 auto;
    padding: 0 10rem;
    position: relative;

    @media (max-width: 37.5em) {
      flex: 0 0 100%;
      /* width: 35vw; */
      display: flex;
      justify-content: center;
    }
    .mentor-vector--1 {
      position: absolute;
      bottom: 0;
      left: -25%;

      z-index: 0;
      width: 60%;
      transform: rotate(-25deg);
      @media (max-width: 37.5em) {
        display: none;
      }
    }

    .mentor-vector--2 {
      position: absolute;

      top: -80px;
      left: 68%;

      width: 50%;
      z-index: 0;
      transform: rotate(20deg);
      @media (max-width: 37.5em) {
        display: none;
      }
    }
    .avatar {
      width: 100%;
      border-radius: 50%;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      @media (max-width: 37.5em) {
        width: 40%;
        position: relative;
        z-index: 0;
        top: 0;
        left: 0;
        margin: auto;
        transform: none;
      }
    }
  }
  .buddyInfor {
    flex: 0 0 50%;
    padding: 2rem 10rem;
    @media (max-width: 37.5em) {
      flex: 0 0 100%;
      padding: 25px;
    }
  }
`;

const BuddyInfor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 37.5em) {
    align-items: center;
    width: 100%;
  }
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
    width: 100%;
    margin-bottom: 1rem;
  }

  .text {
    color: ${style["font-color-light-1"]};
    font-size: ${style["font-size-s"]};
    line-height: ${style["line-height-l"]};
    padding: 10px;
    &--highlight {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
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
      flex-wrap: wrap;
      overflow: hidden;
    }
    &--item {
      border-radius: 20px;
      background: ${style["theme-color-primary-2"]};
      font-size: ${style["font-size-m"]};
      height: 2.5rem;
      padding: 0.5rem 0.8rem;
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
  const { id, audio, avatar } = buddyInfo;

  return (
    // <div></div>
    <Section>
      <div className="image">
        <img src={mentor_vector_1} className="mentor-vector--1" alt="vector" />
        <img src={mentor_vector_2} className="mentor-vector--2" alt="vector" />
        <img className="avatar" src={`/avatars/${avatar}`} alt="buddy" />
      </div>
      <BuddyInfor className="buddyInfor">
        <div className="title">
          Hi! 我是 <span className="name">{buddyInfo.name}</span>
        </div>

        <iframe
          height="60"
          width="260"
          src={audio}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="description">
          <p>#{buddyInfo.info}</p>
          <p>#{buddyInfo.desc}</p>
          <p>#{buddyInfo.region}</p>
          <p>
            自加入BeenThere以来已进行 <span className="number">40</span>{" "}
            次同伴咨询
          </p>
        </div>
        {buddyInfo.tag && buddyInfo.tag.length !== 0 ? (
          <div className="label-box">
            <div className="area">
              <div className="label">擅长领域</div>
            </div>
            <div className="label--list">
              {buddyInfo.tag.map((item, index) => (
                <p className="label--item" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ) : null}

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
                  我要预约
                </Button>
              </div>
            </a>

            <div className="text">
              *你在BeenThere购买的所有服务，都会有
              <span className="text--highlight">5%</span>捐献给
              <span className="text--highlight">xx慈善组织</span>
              <br />
              *为保障心理支持服务的客观性、专业性与审慎性，用户与同一 buddy
              一对一交流次数原则上
              <span className="text--highlight">
                不得超过每周2次、每半年8次
              </span>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a href="https://wj.qq.com/s2/6734752/cd0e/" target="_black">
              <div className="button">
                <Button
                  background="#a7a7ff"
                  fontColor="#ffffff"
                  hoverBackground="#9c9cff"
                >
                  希望和TA语音
                </Button>
              </div>
            </a>

            <div className="text">
              <br />* Buddy暂未开通语音/视频服务...
            </div>
          </React.Fragment>
        )}
      </BuddyInfor>
    </Section>
  );
}
export default React.memo(BuddyIntroBoard);
