import React, { useState } from "react";
import { Section, Gallery, Credentials } from "./style";
import Video from "../../../img/spotlight.png";

import Button from "../../components/Button";

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
    setExpandAll(!expandAll);
  };

  return (
    <Section>
      {" "}
      <div className="title">BeenThere 大家庭</div>
      <div className="description--1">
        BeenThere 是一个源自哈佛中国学生的心灵互助社区
        <br />
        也是一个由哈佛和麻省理工学院孵化的社会企业
        <br />
        {/* 一个spotlight视频快速了解 BeenThere 的 buddy 们： */}
      </div>
      {/* <div className="video">
        <iframe
          src="//player.bilibili.com/player.html?aid=541389683&bvid=BV1Mi4y13725&cid=214051764&page=1"
          scrolling="no"
          border="0"
          frameBorder="no"
          framespacing="0"
          allowFullScreen={true}
          title="family"
          width="750"
          height="550"
        ></iframe>
      </div> */}
      {/* <div className="description--2 ">
        我们目前已有120余位 Online Buddy 们在线值班，TA
        们是位于世界各地的活跃志愿者，分布在中、美、英、法、加拿大、马来西亚、澳洲、日本等国，其中有哈佛、麻省理工、牛津、剑桥、斯坦福、宾大、哥大、伯克利、港大、清北、北师大等海内外名校的众多校友。{" "}
      </div> */}
      <Gallery expandAll={expandAll}>
        <figure className="item--1">
          <img
            src="/family/gallery_1_1.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        {/* <figure className="item--2">
          <img
            src="/family/gallery_1_2.png"
            alt="family gallery"
            className="image"
          />
        </figure> */}
        <figure className="item--3">
          <div className="text">
            我们来自各地, 有着不同的经历 将我们连结在一起的，是那句
            “经历过，所以懂”
          </div>
        </figure>
        <figure className="item--4">
          <img
            src="/family/gallery_2_3.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        <figure className="item--5">
          <img
            src="/family/gallery_3_1.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        <figure className="item--6">
          <img
            src="/family/gallery_3_2.png"
            alt="family gallery"
            className="image"
          />
        </figure>
        <figure className="item--7">
          <img
            src="/family/gallery_4_1.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        <figure className="item--8">
          <img
            src="/family/gallery_4_2.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        {/* <figure className="item--9">
          <div className="text">“莫愁前路无知己， BeenThere Buddy 在等你”</div>
        </figure> */}

        <figure className="item--11">
          <img
            src="/family/gallery_5_2.png"
            alt="family gallery"
            className="image"
          />
        </figure>
        <figure className="item--12">
          <img
            src="/family/gallery_5_3.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        <figure className="item--13">
          <img
            src="/family/gallery_6_1.jpg"
            alt="family gallery"
            className="image"
          />
        </figure>
        <div className="icon" onClick={handleExpand}>
          {expandAll ? closeIcon : expandIcon}
        </div>
      </Gallery>
      <div className="credentials">
        <div className="description--3">赞助团体 / Credentials</div>
        <Credentials>
          <div className="caption">
            <img
              src="/credentials/11.jpg"
              alt="credentials gallery"
              className="image image--1"
            />
            <div className="text">哈佛创新实验室 VIP 项目团队</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/12.jpg"
              alt="credentials gallery"
              className="image image--2"
            />
            <div className="text">MIT Sandbox 创新基金孵化项目</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/13.jpg"
              alt="credentials gallery"
              className="image image--3"
            />
            <div className="text">MIT Legatum 社会创新发展中心赞助项目</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/21.png"
              alt="credentials gallery"
              className="image image--4"
            />
            <div className="text">2020 哥伦比亚大学中国心理论坛嘉宾团队</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/22.jpg"
              alt="credentials gallery"
              className="image image--5"
            />
            <div className="text">2019清华校友三创大赛决赛团队</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/23.png"
              alt="credentials gallery"
              className="image image--6"
            />
            <div className="text">2019 MIT IDEAS Global Challenge 决赛团队</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/31.jpg"
              alt="credentials gallery"
              className="image image--7"
            />
            <div className="text">2019 MIT 亚洲商业论坛嘉宾团队</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/32.png"
              alt="credentials gallery"
              className="image image--8"
            />
            <div className="text">2019 哈佛 Let’s Talk 心理论坛嘉宾团队</div>
          </div>
          <div className="caption">
            <img
              src="/credentials/33.png"
              alt="credentials gallery"
              className="image image--9"
            />
            <div className="text">2018 MIT-中国创新与创业论坛成员团队</div>
          </div>
        </Credentials>
      </div>
      {/* <div style={{ width: "35%", margin: "auto" }}>
        <Link to="/join">
          <Button>加入 BeenThere</Button>
        </Link>
      </div> */}
    </Section>
  );
}
export default React.memo(Family);
