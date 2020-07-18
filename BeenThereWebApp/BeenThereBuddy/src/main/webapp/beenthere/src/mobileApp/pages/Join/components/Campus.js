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
export default function Campus() {
  const [showDetail, setShowDetail] = useState(false);
  const handleClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <Container showDetail={showDetail}>
      <div className="description">
        <h2 className="description__title" onClick={handleClick}>
          报名校园大使 <span className="icon">{arrowIcon}</span>
        </h2>
        <h3 className="description__sub">
          作为校园大使的你将负责
          <br />
          代表BeenThere与高校、高中开展合作
          <br />
          收集反馈校内信息，开展学生端的市场调研
          <br />
          运用BeenThere和校内资源多样化宣传推广
          <br />
          负责校园活动的筹备、协调安排与现场支援
          <br />
        </h3>
        <a
          href="https://mp.weixin.qq.com/s/kdycFK7AJUqPyhVEjw7DKw"
          target="_blank"
          className="button"
        >
          <Button style={{ height: 45 }}>我要成为校园大使</Button>
        </a>
      </div>
    </Container>
  );
}
