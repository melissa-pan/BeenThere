import React, { useState } from "react";
import { Container } from "../style";
import Button from "../../../components/Button";
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
export default function OnlineBuddy() {
  const [showDetail, setShowDetail] = useState(true);
  const handleClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <Container showDetail={showDetail}>
      <div className="description">
        <h2 className="description__title" onClick={handleClick}>
          报名Online Buddy <span className="icon">{arrowIcon}</span>
        </h2>
        <h3 className="description__sub">
          作为提供倾听服务的志愿者，你将收获：
          <br />
          帮助他人走出困境、实现目标
          <br />
          学习心理知识、提升咨询技巧
          <br />
          锻炼共情和沟通——AI时代最重要的人类能力
          <br />
          为学业、职业的发展增加助力
          <br />
          结识一群温暖、善良、优秀的同路人
          <br />
        </h3>
        <a
          href="https://wj.qq.com/s2/5703103/1d0b/"
          target="_blank"
          className="button"
        >
          <Button style={{ height: 45 }}>我要成为Online Buddy</Button>
        </a>
      </div>
    </Container>
  );
}
