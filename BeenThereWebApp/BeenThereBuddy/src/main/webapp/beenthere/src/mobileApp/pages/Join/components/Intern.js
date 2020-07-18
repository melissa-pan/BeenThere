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
export default function Intern() {
  const [showDetail, setShowDetail] = useState(false);
  const handleClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <Container showDetail={showDetail}>
      <div className="description">
        <h2 className="description__title" onClick={handleClick}>
          我要成为实习生 <span className="icon">{arrowIcon}</span>
        </h2>
        <h3 className="description__sub">
          <span className="description__sub--hightlight">
            作为 BeenThere 实习生，你将获得：
          </span>
          <br />
          BeenThere官方实习证书，助力学业、职业发展
          <br />
          享受提供给内部成员的所有配套资源与福利
          <br />
          深入了解初创企业的管理运营及创新实践
          <br />
          软实力的提升与自我成长
          <br />
          结实一群有趣有梦的同路人
          <br />
          <br />
          <span className="description__sub--hightlight">
            目前开放的实习生岗位有：
          </span>
          <br />
          新媒体及短视频运营实习生
          <br />
          技术与产品管理实习生
          <br />
          平面设计师
          <br />
          商务实习生
          <br />
        </h3>
        <a
          href="https://mp.weixin.qq.com/s/KXe5Ok_pF0NDhxuXREiZbA"
          target="_blank"
          className="button"
        >
          <Button style={{ height: 45 }}>我要报名</Button>
        </a>
      </div>
    </Container>
  );
}
