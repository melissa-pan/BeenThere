import React, { useState } from "react";
import styled from "styled-components";
import style from "../global-style";
import Button from "./Button";
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
    height: 53rem;
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

    &__title {
      text-align: center;
      font-weight: bold;
      color: ${style["font-color-light-1"]};
      line-height: 1.5;
      margin-bottom: 10px;
      span {
        display: block;
      }
    }
    &__content {
      width: 100%;
      height: 65%;
      font-size: inherit;

      line-height: ${style["line-height-s"]};

      overflow: scroll;
      overflow-x: hidden;
      position: relative;
    }
    &__item {
      cursor: pointer;

      display: flex;
    }
    &__item:not(:last-child) {
      margin-bottom: 20px;
    }
    &__icon--1,
    &__icon--2 {
      flex: 1;
      margin-right: 10px;
    }
    &__icon--1 {
      width: 14px;
      height: 14px;
    }
    &__icon--2 {
      width: 16px;
      height: 16px;
    }
    &__icon--3 {
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
    &__text {
      flex: 0 0 85%;

      padding: 0 10px;
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
      class="checklist__icon--2"
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
      className="checklist__icon--3"
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
    {
      id: 1,
      checked: false,
      text:
        "我理解，平台不是心理危机干预，不提供专业的心理咨询、诊断、治疗，并且不提供医疗保健相关的具体建议",
    },
    { id: 2, checked: false, text: "我没有伤害自己、或伤害他人的想法" },
    { id: 3, checked: false, text: "我没有住院接受心理治疗和护理的经历" },
    {
      id: 4,
      checked: false,
      text:
        "在过去一年，我没有服用过精神类药物，如抗抑郁药、情绪稳定剂、抗抑郁药、抗精神病药等",
    },
    {
      id: 5,
      checked: false,
      text: "在过去三个月，我没有接受过专业的心理咨询或心理治疗",
    },
    {
      id: 6,
      checked: false,
      text: "我会尊重Buddy、遵守平台的规则以及国家的法律法规",
    },

    {
      id: 7,
      checked: false,
      text: "我不会在平台之外私下联系Buddy，不要求Buddy交换私人联系方式",
    },

    {
      id: 8,
      checked: false,
      text:
        "在如果（1）话题超出平台服务范围、（2）违反平台规定或国家法律法规，Buddy可口头预警三次，然后根据具体情况决定是否终止聊天",
    },
    {
      id: 9,
      checked: false,
      text: "我同意BeenThere的用户协议 和 隐私协议",
    },
  ];
  const [contractList, setContractList] = useState(contract);
  const handleClick = (id) => {
    const newContractList = contractList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setContractList(newContractList);
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
        <div className="checklist__content">
          {contractList.map((item) => (
            <div
              className="checklist__item"
              onClick={() => handleClick(item.id)}
            >
              {item.checked ? checkIcon : uncheckIcon}
              <span className="checklist__text">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="button">
          {" "}
          {contractList.filter((item) => !item.checked).length === 0 ? (
            <Button>继续</Button>
          ) : (
            <Button background="#f6f6f6">继续</Button>
          )}
        </div>
      </div>
    </Container>
  );
}
export default React.memo(Checklist);
