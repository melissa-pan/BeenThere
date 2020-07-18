import React from "react";

import style from "../../../global-style";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

const BuddyInfor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .avatar {
    width: 115px;
    border-radius: 50%;
  }
  .title {
    font-size: ${style["font-size-ls"]};
    line-height: ${style["line-height-3"]};
    margin: 15px auto;
    .name {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
  }
  .description {
    font-size: ${style["font-size-s"]};
    line-height: ${style["line-height-l"]};

    .number {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
  }

  .donate {
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-s"]};
    text-align: center;
    font-weight: bold;
  }
  .label-box {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    margin: 3px auto;
  }
  .label {
    width: 30px;
    color: ${style["font-color-light-2"]};
    font-size: ${style["font-size-sm"]};
    line-height: ${style["line-height-3"]};
  }
  .label--list {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }
    .label--item {
      border-radius: 20px;
      background: ${style["theme-color-primary-2"]};
      font-size: ${style["font-size-ss"]};
      /* color: ${style["highlight-color"]}; */
      height: 16px;
      width: 52px;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 2px;
    }
  
`;
function BuddyIntroBoard(props) {
  const { buddyInfo } = props;
  const { id, audio, avatar } = buddyInfo;

  return (
    // <div></div>
    <Section>
      <BuddyInfor>
        <img className="avatar" src={`/avatars/${avatar}`} alt="buddy" />

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
        <div className="label-box">
          <div className="label">简介</div>
          <div className="description">
            {buddyInfo.info}
            <br />
            {buddyInfo.desc}
            <br />
            {buddyInfo.region}
            <br />
            自加入BeenThere以来已进行 <span className="number">40</span> 次咨询
          </div>
        </div>
        <div className="label-box">
          <div className="label">领域</div>

          <div className="label--list">
            {buddyInfo.tag && buddyInfo.tag.length !== 0
              ? buddyInfo.tag.map((item, index) => (
                  <p className="label--item" key={index}>
                    {item}
                  </p>
                ))
              : null}
          </div>
        </div>
      </BuddyInfor>
    </Section>
  );
}
export default React.memo(BuddyIntroBoard);
