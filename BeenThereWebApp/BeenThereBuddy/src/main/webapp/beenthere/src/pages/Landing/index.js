import React from "react";
import { Container } from "./style";

import Image from "../../img/资源_17@2x_1.png";
import Image2 from "../../img/资源_18@2x_1.png";
import Image3 from "../../img/资源_16@2x_1.png";
import Vector1 from "../../img/Vector_1.png";
import Vector2 from "../../img/Vector_2.png";
import Vector3 from "../../img/Vector_3.png";

import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Introduction from "../../components/Introduction";
import BuddyInfo from "../../components/BuddyInfo";

import Features from "../../components/Features";

function Landing(props) {
  const renderFreeConversion = () => {
    return (
      <Container>
        <div className="description">
          <h2 className="description__title">
            <span>最私密，最暖心的</span>
            <span> 免费匿名线上倾听陪伴</span>
          </h2>
          <h3 className="description__sub">
            随时随地，不限时长次数 | 匿名倾诉，无需注册预约
          </h3>
          <a href = 'https://tawk.to/chat/5d0cf96336eab972111899f7/default'>
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
            <span>和TA语音</span>
          </h2>
          <h3 className="description__sub">
            <span>莫愁前路无知己，BeenThere Buddy在等你</span>
            <span>我们来自各地，有着不同的经历</span>
            <span>我们愿意倾听，愿意分享</span>
            <span>为你提供最私密，最暖心的倾听陪伴</span>
            <span>足不出户就能得到的即时心理支持</span>
          </h3>
          <Link to="/mentors">
            <Button>来聊聊吧</Button>
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
          <h2 className="description__title">21天人生解压舱</h2>
          <h3 className="description__sub">
            <span>莫愁前路无知己，BeenThere Buddy在等你</span>
            <span>我们来自各地，有着不同的经历</span>
            <span>我们愿意倾听，愿意分享</span>
            <span>为你提供最私密，最暖心的倾听陪伴</span>
            <span>足不出户就能得到的即时心理支持</span>
          </h3>
          <Link to="/training">
            <Button>来聊聊吧</Button>
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
