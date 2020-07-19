import React, { useState, useEffect } from "react";
import { Container, Description, QRcode, Section } from "./style";
import Button from "../../components/Button";
import Introduction from "./components/Introduction";
import PsgCover from "./components/PsgCover";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Link } from "react-router-dom";
// import top1 from "../../../img/top_1.png";
// import video from "../../../img/jieyacang.png";
import photo1 from "../../../img/test1_1.png";
import photo2 from "../../../img/spaceship_22_1.png";
import training_vector_1 from "../../../img/training_vector_1.png";
import TrainingCards from "./components/TrainingCards";
import qrtree from "../../../img/qr_tree_1.png";
import qrcode from "../../../img/qrfinal.png";
import training_vector_2 from "../../../img/training_vector_2.png";

function Training() {
  const introRender = () => {
    return (
      <Container>
        <div className="photo photo--1">
          <img src={photo1} alt="cover" />
        </div>
        <Description>
          <h2 className="title">
            人生解压舱
            <br />
            它是个什么舱？
          </h2>
          <h3 className="content">
            延续 BeenThere 倾听陪伴的本心， <br />
            这是一个为期7天的解压体验舱。 <br />
            全程由经过培训的BeenThere朋辈支持者带领， <br />
            人生解压舱将会以线上同伴团体互助的形式呈现。
            <br /> <br />
            每个解压舱至多容纳9名“乘客”， <br />
            在安全、平等、相互尊重和信任的环境中， <br />
            大家敞开心扉、探讨感受、分享情绪、交流经历
            <br />
          </h3>
        </Description>
      </Container>
    );
  };

  const joinRender = () => {
    return (
      <Container>
        <Description>
          <h2 className="title">
            只要￥279 <span className="title--sub">(预报名享9折优惠)</span>
            <br />
            一天一杯奶茶钱，
            <br />
            活力有趣赛神仙~
          </h2>
          <div className="content">
            在人生解压舱的这7天里，我们有下列这么多的活动等着你。舱位有限，快预约登舱券吧～
          </div>
          <a href="#">
            <Button style={{ width: "70%", color: "#FFC368" }}>
              点我预约舱位
            </Button>
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
          <div className="training-vector--2">
            <img src={training_vector_2} alt="background vector 2" />
          </div>
        </QRcode>
        <Description>
          <h2 className="title">预约登舱，享9折优惠</h2>
          <h3 className="content">
            扫描二维码填写预报名表
            <br />
            <br />
            若二维码扫描失败，复制此链接至浏览器打开 <br />
            <a
              href="https://wj.qq.com/s2/6751568/d035?_t=1595078466150"
              className="appointment"
            >
              https://wj.qq.com/s2/6751568/d035?_t=1595078466150
            </a>{" "}
            <br />
            <br />
            BeenThere 小助手会通过邮件或微信及时联系你
          </h3>
        </Description>
      </Container>
    );
  };
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const changeBarBackground = () => {
      const scrollTop = document.scrollingElement.scrollTop;

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
      <Section style={{ background: "#04141F" }}>
        <div className="background-vector">
          <img
            src={training_vector_1}
            alt="background vector 1"
            style={{ width: "100%" }}
          />
        </div>
        <PsgCover />
        {introRender()}
        {joinRender()}
        <TrainingCards />

        <Introduction />
        {joinMethod()}
        <div className="text">
          在 BeenThere 7天人生减压舱，
          <br /> 我们会被看见、被理解、被支持、被尊重； <br />
          我们与心中的少年对话，与久违的真我链接；
          <br /> “没有谁是座孤岛”，心与心的距离就在咫尺之间；
          <br />
          我们学会如何释怀，从而得到解压与踏实！
          <br /> <br />
          跟大伙儿一块儿将那久久戴着的面具摘下，
          <br /> 说真的，让自己透透气吧！
        </div>
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
