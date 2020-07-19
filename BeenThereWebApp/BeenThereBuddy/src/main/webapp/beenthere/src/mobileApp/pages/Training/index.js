import React, { useState, useEffect } from "react";
import {
  Description,
  QRcode,
  Section,
  HeaderContainer,
  Container,
} from "./style";
import Button from "../../components/Button";

import { CSSTransition } from "react-transition-group";

import photo1 from "../../../img/test1_1.png";

import training_vector_1 from "../../../img/training_vector_1.png";
import TrainingCards from "./components/TrainingCards";

import qrtree from "../../../img/qr_tree_1.png";
import qrcode from "../../../img/qrfinal.png";
import training_vector_2 from "../../../img/training_vector_2.png";
import PsgCover from "./components/PsgCover";
import Introduction from "./components/Introduction";
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
const joinMethod = () => {
  return (
    <Container>
      <QRcode>
        <img src={qrcode} alt="QR code" className="qrcode" />
        <img src={qrtree} alt="QR tree" className="training-vector" />

        <img
          src={training_vector_2}
          // className=""
          alt="background vector 2"
          className="training-vector--2"
        />
      </QRcode>
      <Description>
        <h2 className="title">预约登舱，享9折优惠</h2>
        <h3 className="content">
          扫描二维码填写预报名表
          <br />
          <br /> 若二维码扫描失败，复制此链接至浏览器打开
          <br />
          <a href="https://wj.qq.com/s2/6751568/d035?_t=1595078466150">
            https://wj.qq.com/s2/6751568/d035?_t=1595078466150
          </a>
          <br />
          BeenThere 小助手会通过邮件或微信及时联系你
        </h3>
      </Description>
    </Container>
  );
};
function Training(props) {
  const [showBackground, setShowBackground] = useState(false);
  const [showStatus, setShowStatus] = useState(true);
  const handleReturn = () => {
    setShowStatus(false);
  };
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
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Section style={{ background: "#04141F" }}>
        <HeaderContainer onClick={handleReturn}>
          {arrowIcon} <span>7 天人生解压仓</span>
        </HeaderContainer>
        <div className="background-vector">
          <img
            src={training_vector_1}
            alt="background vector 1"
            style={{ width: "100%" }}
          />
        </div>
        <PsgCover />

        <Description>
          <h2 className="title">人生解压舱 它是个什么舱？</h2>
          <h3 className="content">
            延续 BeenThere 倾听陪伴的本心， <br /> 这是一个为期7天的解压体验舱。{" "}
            <br />
            全程由经过培训的BeenThere朋辈支持者带领， <br />{" "}
            人生解压舱将会以同伴团体互助的形式呈现。 <br />{" "}
            每个解压舱至多容纳9名“乘客”， <br />{" "}
            在安全、平等、相互尊重和信任的环境中， <br />
            大家敞开心扉、探讨感受、分享情绪、交流经历
          </h3>
        </Description>
        <div className="photo photo--1">
          <img src={photo1} alt="cover" />
        </div>
        <Description className="description--2">
          <h2 className="title">
            只要￥279 (预报名享9折优惠) <br /> 一天一杯奶茶钱，活力有趣赛神仙~
          </h2>
          <h3 className="content">
            在人生解压舱的这7天里，我们有下列这么多
            <br /> 的活动等着你。舱位有限，快预约登舱券吧～
          </h3>
          {/* <a href="#" style={{ margin: "0 auto", width: "390px" }}>
            <Button
              style={{
                height: 45,
                fontWeight: "bold",
                fontSize: "14px",
                color: "#FFA928",
                width: "80%",
              }}
            >
              点我预约舱位
            </Button>
          </a> */}
        </Description>
        <TrainingCards
          key="1"
          title="PEER SUPPORT GROUP MEETING,线上同伴互助交流舱"
          content="Peer Support Group Meeting (以下简称为 PSG Meeting) 为”解压舱乘客“提供了一个安全、健康的团体心灵互助空间。在这7天里，每个解压舱会进行一次 PSG Meeting。在 PSG Meeting中，经过培训的BeenThere朋辈支持者将会带领“乘客”围绕着共同挑选出来的主题进行个人感受和经历的分享。每一位“解压舱乘客”都有机会去倾诉心事和疏解情绪，同时也慢慢学会去倾听和陪伴彼此。
          || PSG Meeting 不是团体治疗，而是专门提供同伴互助的朋辈支持小组。"
        />
        <TrainingCards
          key="2"
          title="CREATIVE ACTIVITY,线上解压创意活动"
          content=" 与 PSG Meeting 搭配食用：| 在这7天里，| 解压舱乘客还会进行一次 Creative Activity的聚会。 它采用创意十足的形式去让“解压舱乘客”收获一份 与他人交心、得以释放压力的快乐；|| 正经起来的我们会一起在舱内【寻找人生的意义】，| 嗨皮起来的我们说不定就会来一场| 让你过翻瘾的【泄压 Party】"
        />
        <TrainingCards
          key="3"
          title="JOURNEY MARKER,舱内打卡"
          content="有了舱内打卡，妈妈再也不用担心我会忘记这21天的旅程啦！|“情绪日记”、“人生之最”、“时间胶囊”……|等等打卡活动在向我们招手，仿佛在说：|“来嘛！咱一步步解锁这未知之旅！ 打卡选择完全由你决定～”"
        />
        <Introduction />
        {joinMethod()}
        <Description>
          <div className="content--center content ">
            在 BeenThere 7天人生减压舱，
            <br /> 我们会被看见、被理解、被支持、被尊重；
            <br /> 我们与心中的少年对话，
            <br /> 与久违的真我链接；
            <br /> “没有谁是座孤岛”，
            <br /> 心与心的距离就在咫尺之间；
            <br /> 我们学会如何释怀， 从而得到解压与踏实！
            <br />
            <br /> 跟大伙儿一块儿将那久久戴着的面具摘下， <br />
            说真的，让自己透透气吧！
          </div>
        </Description>
        <div className="appointment">
          <a href=" https://wj.qq.com/s2/6751568/d035?_t=1595078466150">
            <Button
              background="#9AA1FC"
              style={{
                height: "45px",
                width: "295px",
                fontSize: "18px",
                color: "#FFF2DE",
              }}
            >
              点我预约舱位
            </Button>
          </a>
        </div>
      </Section>
    </CSSTransition>
  );
}
export default React.memo(Training);
