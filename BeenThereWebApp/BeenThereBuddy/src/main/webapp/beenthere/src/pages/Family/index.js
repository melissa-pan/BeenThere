import React, { useState } from "react";
import { Section, Gallery } from "./style";
import Video from "../../img/spotlight.png";
import Credentials from "../../img/credentials.png";
import Button from "../../components/Button";
import Gallery11 from "../../img/gallery_1_1.png";
import Gallery12 from "../../img/gallery_1_2.png";
import Gallery31 from "../../img/gallery_3_1.png";
import { Link } from "react-router-dom";
function Family() {
  const expandIcon = (
    <svg
      t="1593814061138"
      className="expandIcon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2080"
      width="48"
      height="48"
    >
      <path
        d="M512 391.269136l-346.390123-341.333334a41.971358 41.971358 0 0 0-59.417284 0c-15.802469 16.434568-15.802469 42.350617 0 58.785186l372.938271 367.249382c8.849383 8.217284 20.859259 12.641975 32.869136 12.009877 12.009877 1.264198 24.651852-3.160494 32.869136-12.009877l372.938271-367.249382c16.434568-15.802469 16.434568-41.718519 0.632099-57.520988l-0.632099-0.632099a41.971358 41.971358 0 0 0-59.417284 0L512 391.269136z m0 498.093827L81.540741 465.224691a41.971358 41.971358 0 0 0-59.417284 0 40.264691 40.264691 0 0 0-0.632099 57.520988c0 0.632099 0.632099 0.632099 0.632099 0.632099L479.130864 973.432099c8.849383 8.217284 20.859259 12.641975 32.869136 12.009876 12.009877 1.264198 24.651852-3.160494 32.869136-12.009876l457.007407-450.054321c16.434568-15.802469 16.434568-41.718519 0.632099-57.520988 0-0.632099-0.632099-0.632099-0.632099-0.632099a41.971358 41.971358 0 0 0-59.417284 0L512 889.362963z"
        p-id="2081"
        fill="#ffffff"
      ></path>
    </svg>
  );
  const closeIcon = (
    <svg
      t="1593816688800"
      className="closeIcon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2407"
      width="48"
      height="48"
    >
      <path
        d="M512 632.730864l346.390123 341.333334a41.971358 41.971358 0 0 0 59.417284-1e-8c15.802469-16.434568 15.802469-42.350617 0-58.78518599l-372.938271-367.249382c-8.849383-8.217284-20.859259-12.641975-32.869136-12.009877-12.009877-1.264198-24.651852 3.160494-32.869136 12.009877l-372.938271 367.249382c-16.434568 15.802469-16.43456799 41.718519-0.632099 57.52098801l0.63209899 0.63209899a41.971358 41.971358 0 0 0 59.41728401 0L512 632.730864z m0-498.09382701L942.459259 558.775309a41.971358 41.971358 0 0 0 59.417284 1e-8 40.264691 40.264691 0 0 0 0.632099-57.52098801c0-0.632099-0.632099-0.632099-0.632099-0.632099L544.869136 50.567901c-8.849383-8.217284-20.859259-12.641975-32.869136-12.009876-12.009877-1.264198-24.651852 3.160494-32.869136 12.009876l-457.007407 450.054321c-16.434568 15.802469-16.43456799 41.718519-0.632099 57.520988 0 0.632099 0.632099 0.632099 0.632099 0.63209901a41.971358 41.971358 0 0 0 59.417284-1e-8L512 134.63703699z"
        p-id="2408"
        fill="#ffffff"
      ></path>
    </svg>
  );
  const [expandAll, setExpandAll] = useState(false);
  const handleExpand = () => {
    setExpandAll(true);
  };
  const handleClose = () => {
    setExpandAll(false);
  };
  return (
    <Section>
      {" "}
      <div className="title">BeenThere 大家庭</div>
      <div className="description--1">
        <p>BeenThere 是一个源自哈佛中国学生的成长互助社区</p>
        <p>一个spotlight视频快速了解我们：</p>
      </div>
      <div className="video">
        <img src={Video} alt="spotlight" />
      </div>
      <div className="description--2 ">
        大家族成员已超过100人。目前我们已100余位Online
        Buddy，TA们是来自世界各地名校的活跃志愿者，位于美国、中国、加拿大、澳大利亚、日本、英国等国家，TA们的背景涵盖哈佛、麻省理工、斯坦福、牛津、剑桥、宾大、哥大、伯克利、清华、北大、复旦等海内外名校。
      </div>
      <Gallery expandAll={expandAll}>
        <figure className="item--1">
          <img src={Gallery11} alt="family gallery" className="image" />
        </figure>
        <figure className="item--2">
          <img src={Gallery12} alt="family gallery" className="image" />
        </figure>
        <figure className="item--3">
          <div className="text">
            我们来自各地, 有着不同的经历 将我们连结在一起的，是那句
            “经历过，所以懂”
          </div>
        </figure>
        <figure className="item--4">
          <img src={Gallery11} alt="family gallery" className="image" />
        </figure>
        <figure className="item--5">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <figure className="item--6">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <figure className="item--7">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <figure className="item--8">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <figure className="item--9">
          <div className="text">“莫愁前路无知己， BeenThere Buddy 在等你”</div>
        </figure>
        <figure className="item--10">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <figure className="item--11">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <figure className="item--12">
          <img src={Gallery31} alt="family gallery" className="image" />
        </figure>
        <div className="icon" onClick={expandAll ? handleClose : handleExpand}>
          {expandAll ? closeIcon : expandIcon}
        </div>
      </Gallery>
      <div className="credentials">
        <div className="description--3">赞助团体 / Credentials</div>
        <img
          src={Credentials}
          alt="Credentials"
          className="credentials__icon"
        />
      </div>
      <div style={{ width: "35%", margin: "auto" }}>
        <Link to="/join">
          <Button>加入 BeenThere</Button>
        </Link>
      </div>
    </Section>
  );
}
export default React.memo(Family);
