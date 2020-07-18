import React, { useState } from "react";
import { Container, Section, HeaderContainer } from "./style";
import Button from "../../components/Button";
import Campus from "./components/Campus";
import Intern from "./components/Intern";
import OnlineBuddy from "./components/OnlineBuddy";
import { CSSTransition } from "react-transition-group";
import Image from "../../../img/资源_21@2x_1.png";

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

export default function Join(props) {
  const [showStatus, setShowStatus] = useState(true);
  const { history } = props;
  const handleReturn = () => {
    setShowStatus(false);
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
      <Section>
        <HeaderContainer onClick={handleReturn}>
          {arrowIcon} <span>加入BeenThere Buddy</span>
        </HeaderContainer>
        <img src={Image} alt="join" className="image" />
        {/* <div className="title">欢迎加入BeenThere大家庭！</div> */}
        <div className="description">
          BeenThere 是一个源自哈佛中国学生的心灵互助社区
          <br />
          在这个优质社群里，你将获得与同伴互助相关的实践，不仅可以帮助他人走出困境、迸发潜能，还有可能疏解自己的困扰，实现自己的目标；
          在BeenThere大家庭，你会遇见彩虹般的人{" "}
        </div>

        <OnlineBuddy />
        <Campus />
        <Intern />
      </Section>
    </CSSTransition>
  );
}
