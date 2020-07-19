import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import style from "../../../global-style";
import Button from "../../../components/Button";
import { fetchedMentorData } from "../../../redux/index";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: ${style["font-size-s"]};

  .title {
    text-align: center;
    font-weight: bold;
    color: ${style["font-color-light-1"]};
    line-height: 1.5;
    padding-top: 70px;
    margin-bottom: 25px;
    span {
      display: block;
    }
  }
  .content {
    width: 90%;
    height: 55%;
    margin: 0 auto;
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-s"]};
    overflow: scroll;
    overflow-x: hidden;
    position: relative;
  }

  .item {
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-l"]};
    padding: 0 20px;
    display: flex;
    margin-bottom: 20px;
    color: ${style["font-color-light-1"]};
  }
  .checkbox {
    display: flex;
    align-items: center;
    margin: 10px auto;
    font-size: ${style["font-size-m"]};
  }
  .icon--1 {
    flex: 1;
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }

  .icon--2 {
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

  .button {
    flex: 1;
    display: flex;
    align-items: flex-end;
    width: 80%;
    margin: 5px auto;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: ${style["line-height-m"]};
  color: ${style["font-color-light-1"]};
  background-color: ${style["background-color-white"]};
  z-index: 100;
  margin: 0;
  font-size: ${style["font-size-l"]};
  font-weight: bold;
  text-align: center;
  .icon {
    cursor: pointer;
  }
  & > span {
    text-align: center;
    flex: 0 0 75%;
    letter-spacing: 0.02em;
  }
`;

function Checklist(props) {
  const { buddyInfo } = props;
  const { fetchedMentorData } = props;

  const id = props.match.params.id;
  console.log(id);
  useEffect(() => {
    fetchedMentorData(id);
  }, []);
  const handleAppointment = (e) => {
    e.preventDefault();

    window.open(`${buddyInfo.appointmentLink}`);
  };
  const uncheckIcon = (
    <svg
      t="1593721313394"
      className="icon--1"
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
      className="icon--1"
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

  const arrowIcon = (
    <svg
      t="1595034698857"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2409"
      width="48"
      height="48"
    >
      <path
        d="M640 674.133333l-166.4-166.4L640 341.333333a41.258667 41.258667 0 0 0 0-59.733333 41.258667 41.258667 0 0 0-59.733333 0l-196.266667 196.266667a41.258667 41.258667 0 0 0 0 59.733333l196.266667 196.266667A42.24 42.24 0 1 0 640 674.133333z"
        p-id="2410"
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
  console.log(check);
  const [showStatus, setShowStatus] = useState(true);
  const handleReturn = () => {
    setShowStatus(false);
  };
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
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <HeaderContainer onClick={handleReturn}>
          {arrowIcon} <span>和TA语音/视频</span>
        </HeaderContainer>
        <div className="title">
          <span>为了来访者的安全与福祉，</span>
          <span> 为了确保服务不超出Buddy们的能力范围，</span>
          <span>请确认以下选项：</span>
        </div>
        <div className="content" ref={ref}>
          {contract.map((item, index) => (
            <div className="item" key={index}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
        <div
          onClick={handleClick}
          className="checkbox"
          // disabled={!check}
        >
          {check ? checkIcon : uncheckIcon} 我已阅读并理解
        </div>

        <div onClick={handleAppointment} className="button">
          <Button
            disabled={!check}
            style={{ height: "45px", fontSize: "18px" }}
          >
            继续
          </Button>
        </div>
      </Container>
    </CSSTransition>
  );
}
const mapStateToProps = (state) => ({
  buddyInfo: state.buddy.buddyInfo,
});
const mapDispatchToProps = {
  fetchedMentorData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checklist));
