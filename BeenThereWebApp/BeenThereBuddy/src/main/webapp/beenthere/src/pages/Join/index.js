import React from "react";
import { Container, Title } from "./style";
import Button from "../../components/Button";

import Image from "../../img/资源_18@2x_1.png";
import Image2 from "../../img/资源_21@2x_1.png";
import Image3 from "../../img/资源_23@2x_1.png";
import Vector1 from "../../img/Vector_2.png";
import Vector2 from "../../img/Vector_3.png";

import { Link } from "react-router-dom";
export default function Join() {
  const renderOnlineBuddy = () => {
    return (
      <Container>
        <div className="photo photo--2">
          <img src={Image} alt="design responsive" />
        </div>
        <div className="description">
          <h2 className="description__title">
            <span>报名Online Buddy</span>
          </h2>
          <h3 className="description__sub">
            <span>作为提供倾听服务的志愿者，你将收获： </span>
            <span>帮助他人走出困境、实现目标</span>
            <span>学习心理知识、提升咨询技巧</span>
            <span>锻炼共情和沟通——AI时代最重要的人类能力</span>
            <span>为学业、职业的发展增加助力</span>
            <span>结识一群温暖、善良、优秀的同路人</span>
          </h3>
          <a href="#">
            <Button>我要报名</Button>
          </a>
        </div>
        <img
          src={Vector1}
          className="background-vector background-vector--1"
          alt="vector background 1"
        />
      </Container>
    );
  };
  const renderCampus = () => {
    return (
      <Container>
        <div className="description">
          <h2 className="description__title">报名校园大使</h2>
          <h3 className="description__sub">
            <span>作为校园大使的你将负责</span>
            <span>代表BeenThere与高校、高中开展合作</span>
            <span>收集反馈校内信息，开展学生端的市场调研</span>
            <span>运用BeenThere和校内资源多样化宣传推广</span>
            <span>负责校园活动的筹备、协调安排与现场支援</span>
          </h3>
          <a href="#">
            <Button>我要报名</Button>
          </a>
        </div>
        <div className="photo photo--1">
          <img src={Image2} alt="design responsive"></img>
        </div>
        <img
          src={Vector2}
          className="background-vector background-vector--2"
          alt="vector background 2"
        />
      </Container>
    );
  };
  const renderIntern = () => {
    return (
      <Container>
        <div className="photo photo--3">
          <img src={Image3} alt="design responsive" />
        </div>
        <div className="description">
          <h2 className="description__title">
            <span>报名实习生</span>
          </h2>
          <h3 className="description__sub">
            <span>
              <b>作为 BeenThere 实习生，你将获得：</b>
            </span>
            <span>BeenThere官方实习证书，助力学业、职业发展</span>
            <span>享受提供给内部成员的所有配套资源与福利</span>
            <span>深入了解初创企业的管理运营及创新实践</span>
            <span>软实力的提升与自我成长</span>
            <span>结实一群有趣有梦的同路人</span>
            <span>目前开放的实习生岗位有：</span>
            <span>新媒体及短视频运营实习生</span>
            <span>技术与产品管理实习生</span>
            <span>平面设计师</span>
            <span>商务实习生</span>
          </h3>
          <a href="#">
            <Button>我要报名</Button>
          </a>
        </div>

        <img
          src={Vector1}
          className=" background-vector background-vector--3"
          alt="vector background 3"
        />
      </Container>
    );
  };
  return (
    <React.Fragment>
      <Title>
        <div className="title">欢迎加入BeenThere大家庭！</div>
        <div className="description">
          <p>BeenThere 是一个源自哈佛中国学生的成长互助社区</p>
          <p>
            在这里，你可以获得与心理咨询相关的第一手知识与实践，帮助他人走出困境、迸发潜能，疏解自己的困扰，实现自己的目标，遇见彩虹般的人
          </p>
        </div>
        <Link to="/family">
          <button className="button">了解 BeenThere ></button>
        </Link>
      </Title>
      {renderOnlineBuddy()}
      {renderCampus()}
      {renderIntern()}
    </React.Fragment>
  );
}
