import React, { useState, useEffect } from "react";
import { Container, Description, QRcode, Section } from "./style";
import Button from "../../components/Button";
import Introduction from "../../components/Introduction";
import Carousel from "../../components/Carousel";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Link } from "react-router-dom";
import top1 from "../../img/top_1.png";
import video from "../../img/jieyacang.png";
import photo1 from "../../img/test1_1.png";
import photo2 from "../../img/spaceship_22_1.png";
import training_vector_1 from "../../img/training_vector_1.png";
import training_vector_2 from "../../img/training_vector_2.png";
import qrtree from "../../img/qr_tree_1.png";
import qrcode from "../../img/qrfinal.png";

import TrainingCards from "../../components/TrainingCards";
import background from "../../img/background.png";

function Training() {
  const introRender = () => {
    return (
      <Container>
        <div className="photo photo--1">
          <img src={photo1} alt="cover" />
        </div>
        <Description>
          <h2 className="title">
            <span>人生解压舱</span>
            <span>它是个什么舱？</span>
          </h2>
          <h3 className="content">
            <span>延续 BeenThere 倾听陪伴的本心，</span>
            <span>这是一个为期21天的解压体验舱。</span>
            <span>起航日期定为6月1日，</span>
            <span>每个解压舱限定10个舱位，</span>
            <span>容纳2名BeenThere Buddy与8名“解压舱乘客”，</span>
            <span>这10人组成一个同伴互助小团体。</span>
            <span>为大家提供一个可以敞开心扉、探讨感受、分享情</span>
            <span>绪、交流经历的安全空间。</span>
          </h3>
        </Description>
      </Container>
    );
  };

  const joinRender = () => {
    return (
      <Container>
        <Description className="description--2">
          <h2 className="title">
            <span>只要￥661，</span>
            <span>一天一杯奶茶钱，</span>
            <span>活力有趣赛神仙~</span>
          </h2>
          <h3 className="content">
            <span>那么这21天的时间里在人生解压舱离我们都干啥嘞？</span>
            <span>心动不如行动看完下列活动马上来报名吧~</span>
          </h3>
          <a href="#">
            <Button>我要报名</Button>
          </a>
        </Description>
        <div className="photo photo--2">
          <img src={photo2} alt="photo" />
        </div>
      </Container>
    );
  };

  const joinMethod = () => {
    return (
      <Container>
        <QRcode>
          <div className="training-vector">
            <img src={qrtree} alt="QR tree" />
          </div>
          <div className="qrcode">
            <img src={qrcode} alt="QR code" />
          </div>
          {/* <div></div> */}
          <img
            src={training_vector_2}
            // className=""
            alt="background vector 2"
          />
        </QRcode>
        <Description>
          <h2 className="title">
            <span>登舱步骤</span>
          </h2>
          <h3 className="content">
            <span>扫描左方二维码填写报名表</span>
            <span>报名截止：北京时间5月29日11:59pm </span>
            <br />
            <span>若二维码扫描失败，复制此链接至浏览器打开</span>
            <br />
            <span>BeenThere 小助手会于北京时间5月31日</span>
            <span>告知您分组结果与付费方式，请您当日完成缴费</span>
            <br />
            <span>请于北京时间 6月1日参加 Orientation</span>
          </h3>
        </Description>
      </Container>
    );
  };
  const [showBackground, setShowBackground] = useState(false);
  const changeBarBackground = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    // console.log(showBackground);
    if (scrollTop > 100) {
      if (!showBackground) {
        setShowBackground(true);
      }
    } else {
      if (showBackground) {
        setShowBackground(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", changeBarBackground);
    return () => {
      document.removeEventListener("scroll", changeBarBackground);
    };
  }, [showBackground]);
  return (
    <div>
      <Header
        fontColor="#FEFBF6"
        backgroundColor="#132434"
        showBackground={showBackground}
      />
      <Section style={{ backgroundImage: "url(" + background + ")" }}>
        <div className="background-vector">
          <img
            src={training_vector_1}
            alt="background vector 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <figure className="top">
            <img src={top1} alt="top_image" style={{ width: "100%" }} />
          </figure>
          <figure className="video">
            <img src={video} alt="解压舱" style={{ width: "100%" }} />
          </figure>
        </div>
        {introRender()}
        {joinRender()}
        <TrainingCards />
        <Description>
          <div className="title title--center">BeenThere Buddy 导师团队</div>
          <div className="content content--center">
            <p>
              目前我们已有100余位online
              Buddy，TA们是来自世界各地名校的活跃志愿者
            </p>
            <p>
              来自哈佛、麻省理工、斯坦福、伯克利、清华、北大、复旦等海内外名校
            </p>
          </div>
        </Description>
        <Carousel />
        <Link to="/mentors">
          <button className="button">查看更多 ></button>
        </Link>
        <Introduction
          swiperColor="rgba(91, 115, 123, 0.8)"
          fontColor="#fff2df"
        />
        {joinMethod()}
        <Description>
          <div className="content--center content ">
            <span>
              送自己张“人生减压舱”的登舱券吧，在这里，你会被看见、被理解、被支持、被尊重；
            </span>
            <span>
              送自己张“人生减压舱”的登舱券吧，与心中的少年对话，与久违的真我链接；
            </span>
            <span>
              送自己张“人生减压舱”的登舱券吧，学会如何释怀，从而得到解压与踏实！
            </span>
            <br />
            <span>
              跟大伙儿一块儿将那久久戴着的面具摘下，把内心那个年少的、真实的自己约出来见见面呀～
            </span>
            <span>说真的，让自己透透气吧！</span>
          </div>
        </Description>
      </Section>
      <Footer
        fontColor1="#FFF2DE"
        fontColor2="#FEFBF6"
        backgroundColor="#818486"
      />
    </div>
  );
}
export default React.memo(Training);
