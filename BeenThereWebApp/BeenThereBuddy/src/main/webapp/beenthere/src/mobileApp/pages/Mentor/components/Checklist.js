import React, { useState, useRef } from "react";
import styled from "styled-components";
import style from "../../../global-style";
import Button from "../../../components/Button";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;

  opacity: ${(props) => (props.showStatus ? 1 : 0)};
  visibility: ${(props) => (props.showStatus ? "visible" : "hidden")};
  transition: all 0.2s;

  .checklist {
    width: 35%;
    height: 75vh;
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
    @media (min-width: 93.75em) {
      width: 432px;
      margin: 0 auto;
    }
    &__title {
      text-align: center;
      font-weight: bold;
      color: ${style["font-color-light-1"]};
      line-height: 1.5;
      margin-bottom: 25px;
      span {
        display: block;
      }
    }
    &__content {
      width: 100%;
      height: 55%;
      font-size: inherit;
      line-height: ${style["line-height-s"]};
      overflow: scroll;
      overflow-x: hidden;
      position: relative;
    }

    &__item {
      font-size: ${style["font-size-m"]};
      line-height: ${style["line-height-l"]};
      padding: 0 20px;
      display: flex;
      margin-bottom: 20px;
      color: ${style["font-color-light-1"]};
    }
    &__checkbox {
      display: flex;
      align-items: center;
      margin: 5px auto;
      font-size: ${style["font-size-m"]};
    }
    &__icon--1 {
      flex: 1;
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }

    &__icon--2 {
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
  }
  .button {
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
`;

function Checklist(props) {
  const { showStatus } = props;
  const { handleCloseChecklist } = props;
  const uncheckIcon = (
    <svg
      t="1593721313394"
      className="checklist__icon--1"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8278"
      width="200"
      height="200"
    >
      <path
        d="M853.333333 1024H170.666667c-93.866667 0-170.666667-76.8-170.666667-170.666667V170.666667C0 76.8 76.8 0 170.666667 0h682.666666c93.866667 0 170.666667 76.8 170.666667 170.666667v682.666666c0 93.866667-76.8 170.666667-170.666667 170.666667zM170.666667 85.333333c-51.2 0-85.333333 34.133333-85.333334 85.333334v682.666666c0 51.2 34.133333 85.333333 85.333334 85.333334h682.666666c51.2 0 85.333333-34.133333 85.333334-85.333334V170.666667c0-51.2-34.133333-85.333333-85.333334-85.333334H170.666667z"
        fill="#787878"
        p-id="8279"
      ></path>
    </svg>
  );
  const checkIcon = (
    <svg
      t="1593722429468"
      className="checklist__icon--1"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8529"
      width="200"
      height="200"
    >
      <path
        d="M136.533333 64.853333h750.933334c40.96 0 71.68 30.72 71.68 71.68v750.933334c0 40.96-30.72 71.68-71.68 71.68H136.533333c-40.96 0-71.68-30.72-71.68-71.68V136.533333c0-40.96 30.72-71.68 71.68-71.68z m610.986667 259.413334l-307.2 307.2-163.84-163.84c-17.066667-17.066667-47.786667-17.066667-68.266667 0-17.066667 17.066667-17.066667 47.786667 0 68.266666l208.213334 208.213334c13.653333 13.653333 37.546667 13.653333 51.2 0L819.2 392.533333c17.066667-17.066667 17.066667-47.786667 0-68.266666-20.48-17.066667-51.2-17.066667-71.68 0z"
        p-id="8530"
        fill="#FFC368"
      ></path>
      <path
        d="M136.533333 64.853333h750.933334c40.96 0 71.68 30.72 71.68 71.68v750.933334c0 40.96-30.72 71.68-71.68 71.68H136.533333c-40.96 0-71.68-30.72-71.68-71.68V136.533333c0-40.96 30.72-71.68 71.68-71.68z m610.986667 259.413334l-307.2 307.2-163.84-163.84c-17.066667-17.066667-47.786667-17.066667-68.266667 0-17.066667 17.066667-17.066667 47.786667 0 68.266666l208.213334 208.213334c13.653333 13.653333 37.546667 13.653333 51.2 0L819.2 392.533333c17.066667-17.066667 17.066667-47.786667 0-68.266666-20.48-17.066667-51.2-17.066667-71.68 0z"
        p-id="8531"
        fill="#FFC368"
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      t="1593724592923"
      className="checklist__icon--2"
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
  const contract = [
    "根据我目前所在地的法律，我已成年",
    "我当前没有自杀倾向、没有伤害自己或TA人的倾向和行动",
    "在过去1年，我没有目睹或亲历过性暴力、家暴、肢体虐待等创伤经历",
    "在过去6个月，我没有服用精神科药物治疗",
    "平台建议避免与Buddy有双重或多重关系（如亲戚、恋爱、工作和其它熟人关系等）；我会尊重Buddy以及轻咨询服务的伦理界限，不会在轻咨询关系之外私下联系TA",
    "我理解：BeenThere提供优质的同伴心理支持和倾听陪伴，不是心理危机干预，不提供专业的诊断和心理治疗、或医疗有关的具体建议",
    "我理解:  如果我在聊天中（1）体现出的生理、心理、精神状态超出服务范围（2）违反平台规定（3）不符合中华人民共和国法规，Buddy有权利在2次提醒后视具体情况决定是否中止此次服务，并移交督导小组决定是否转介或退款，最终解释权归BeenThere平台所有",
    "我理解：我知悉平台会严格保护我的个人隐私，不会以任何形式向平台外的第三方转述、透露、或公开发布全部或部分我的个人信息、隐私、亲身经历、以及服务过程，除非：  1）	事先经由我书面同意授权  2）危及我、Buddy 或他人的人身安全  3）接受相关国家机构的调查",
  ];
  const [check, setcheck] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    const isBottom =
      ref.current.scrollTop + ref.current.clientHeight + 50 >
      ref.current.scrollHeight;
    if (isBottom) {
      setcheck(!check);
    }
  };

  return (
    <Container showStatus={showStatus}>
      <div className="checklist">
        <a href="#" onClick={handleCloseChecklist}>
          {closeIcon}
        </a>
        <div className="checklist__title">
          <span>为了来访者的安全与福祉，</span>
          <span> 为了确保服务不超出Buddy们的能力范围，</span>
          <span>请确认以下选项：</span>
        </div>
        <div className="checklist__content" ref={ref}>
          {contract.map((item, index) => (
            <div className="checklist__item" key={index}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
        <div
          onClick={handleClick}
          className="checklist__checkbox"
          // disabled={!check}
        >
          {check ? checkIcon : uncheckIcon} 我已阅读并理解
        </div>
        <div className="button">
          <Button disabled={!check}>继续</Button>
        </div>
      </div>
    </Container>
  );
}
export default React.memo(Checklist);
