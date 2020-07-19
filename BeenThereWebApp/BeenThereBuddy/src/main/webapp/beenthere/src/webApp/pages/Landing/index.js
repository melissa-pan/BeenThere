import React from "react";
import { Container } from "./style";

import Image from "../../../img/资源_17@2x_1.png";
import Image2 from "../../../img/资源_18@2x_1.png";
import Image3 from "../../../img/资源_16@2x_1.png";
import Vector1 from "../../../img/Vector_1.png";
import Vector2 from "../../../img/Vector_2.png";
import Vector3 from "../../../img/Vector_3.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Introduction from "./components/Introduction";
import BuddyInfo from "./components/BuddyInfo";
import Features from "./components/Features";

function Landing(props) {
  const renderFreeConversion = () => {
    return (
      <Container>
        <div className="description">
          <h2 className="description__title">
            <span>最私密，最暖心的</span>
            <span> 免费匿名倾听陪伴</span>
          </h2>
          <h3 className="description__sub">
            随时随地匿名畅谈 | 全球优质同伴支持
          </h3>
          <a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default">
            <Button>来聊聊吧</Button>
          </a>
        </div>
        <div className="photo photo--1">
          <img src={Image} alt="design responsive" />
        </div>
        <img
          src={Vector1}
          className=" background-vector background-vector--1"
          alt="vector background 1"
        />
      </Container>
    );
  };
  const renderPayConversion = () => {
    return (
      <Container>
        <div className="photo photo--2">
          <img src={Image2} alt="design responsive" />
        </div>
        <div className="description">
          <h2 className="description__title">
            <span>找到你的专属Buddy</span>
          </h2>
          <h3 className="description__sub">
            <span>莫愁前路无知己，BeenThere Buddy在等你</span>
            <span>我们来自各地，有着不同的经历</span>
            <span>我们通过严格的筛选与培训</span>
            <span>我们愿意倾听，愿意分享</span>
            <span>愿意一路陪你成长</span>
          </h3>
          <Link to="/mentors">
            <Button>和TA语音/视频</Button>
          </Link>
        </div>
        <img
          src={Vector2}
          className="background-vector background-vector--2"
          alt="vector background 2"
        />
      </Container>
    );
  };
  const renderTraining = () => {
    return (
      <Container>
        <div className="description">
          <h2 className="description__title">7天人生解压舱</h2>
          <h3 className="description__sub">
            <span>同在人生困惑时，相逢何必曾相识</span>
            <span>登陆BeenThere线上团体互助空间</span>
            <span>分享相似经历，获得不同视角</span>
            <span>在这里卸下压力与伪装</span>
            <span>整理心情，重新出发</span>
          </h3>
          <Link to="/psgmeeting">
            <Button>点我预约登舱</Button>
          </Link>
        </div>
        <div className="photo photo--3">
          <img src={Image3} alt="design responsive"></img>
        </div>
        <img
          src={Vector3}
          className="background-vector background-vector--3"
          alt="vector background 3"
        />
      </Container>
    );
  };
  return (
    <React.Fragment>
      {renderFreeConversion()}
      {renderPayConversion()}
      {renderTraining()}
      <Introduction />
      <BuddyInfo />
      <Features />
    </React.Fragment>
  );
}
export default Landing;
