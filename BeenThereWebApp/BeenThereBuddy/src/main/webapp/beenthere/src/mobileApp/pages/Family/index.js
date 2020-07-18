import React, { useState } from "react";
import { Section, Gallery, Credentials, HeaderContainer } from "./style";
import Video from "../../../img/spotlight.png";

import { CSSTransition } from "react-transition-group";
import Button from "../../components/Button";

import { Link } from "react-router-dom";
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
function Family(props) {
  const { history } = props;
  const [showStatus, setShowStatus] = useState(true);

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
          {arrowIcon} <span>BeenThere 大家庭</span>
        </HeaderContainer>
        <div className="video">
          <img src={Video} alt="spotlight" />
        </div>
        <div className="description--1 ">
          我们目前已有120余位 Online Buddy 们在线值班，TA
          们是位于世界各地的活跃志愿者，分布在中、美、英、法、加拿大、马来西亚、澳洲、日本等国，其中有哈佛、麻省理工、牛津、剑桥、斯坦福、宾大、哥大、伯克利、港大、清北、北师大等海内外名校的众多校友。{" "}
        </div>
        <div style={{ width: "35%", margin: "auto" }}>
          <Link to="/join">
            <Button>加入 BeenThere</Button>
          </Link>
        </div>
        <div className="credentials">
          <div className="description--2">赞助团体 / Credentials</div>
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
              <div className="text">
                2019 MIT IDEAS Global Challenge 决赛团队
              </div>
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
        <Gallery>
          <img
            src="/family/gallery_1_1.jpg"
            alt="family gallery"
            className=" image image--1"
          />

          <img
            src="/family/gallery_1_2.png"
            alt="family gallery"
            className="image image--2"
          />

          <img
            src="/family/gallery_2_3.jpg"
            alt="family gallery"
            className="image image--3"
          />

          <img
            src="/family/gallery_3_1.jpg"
            alt="family gallery"
            className="image image--4"
          />

          <img
            src="/family/gallery_3_2.png"
            alt="family gallery"
            className="image image--5"
          />

          <img
            src="/family/gallery_4_1.jpg"
            alt="family gallery"
            className="image image--6"
          />

          <img
            src="/family/gallery_4_2.jpg"
            alt="family gallery"
            className="image image--7"
          />

          <img
            src="/family/gallery_5_1.png"
            alt="family gallery"
            className="image image--8"
          />

          <img
            src="/family/gallery_5_2.png"
            alt="family gallery"
            className="image image--9"
          />

          <img
            src="/family/gallery_5_3.jpg"
            alt="family gallery"
            className="image image--10"
          />

          <img
            src="/family/gallery_6_1.jpg"
            alt="family gallery"
            className="image image--11"
          />
        </Gallery>
      </Section>
    </CSSTransition>
  );
}
export default React.memo(Family);
