import React, { useState, useEffect } from "react";
import { Description, QRcode, Section, HeaderContainer } from "./style";
import Button from "../../components/Button";
// import Introduction from "../../components/Introduction";

import { CSSTransition } from "react-transition-group";

import top1 from "../../../img/top_1.png";
import video from "../../../img/jieyacang.png";
import photo1 from "../../../img/test1_1.png";
import photo2 from "../../../img/spaceship_22_1.png";
import training_vector_1 from "../../../img/training_vector_1.png";
import TrainingCards from "./components/TrainingCards";
import background from "../../../img/background.png";
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
        <div>
          <figure className="top">
            <img src={top1} alt="top_image" style={{ width: "100%" }} />
          </figure>
          <figure className="video">
            <img src={video} alt="解压舱" style={{ width: "100%" }} />
          </figure>
        </div>

        <Description>
          <h2 className="title">人生解压舱 它是个什么舱？</h2>
          <h3 className="content">
            延续 BeenThere 倾听陪伴的本心，
            <br />
            这是一个为期21天的解压体验舱。
            <br />
            起航日期定为6月1日，
            <br />
            每个解压舱限定10个舱位，
            <br />
            容纳2名BeenThere Buddy与8名“解压舱乘客”，
            <br />
            这10人组成一个同伴互助小团体。
            <br />
            为大家提供一个可以敞开心扉、探讨感受、分享情
            <br />
            绪、交流经历的安全空间。
          </h3>
        </Description>
        <div className="photo photo--1">
          <img src={photo1} alt="cover" />
        </div>
        <Description className="description--2">
          <h2 className="title">
            只要￥661 <br />
            一天一杯奶茶钱，活力有趣赛神仙~
          </h2>
          <h3 className="content">
            那么这21天的时间里在人生解压舱离我们都干啥嘞？
            <br />
            心动不如行动看完下列活动马上来报名吧~
          </h3>
          <a href="#">
            <Button style={{ height: 45, fontWeight: "bold" }}>
              点我预约舱位
            </Button>
          </a>
        </Description>
        <TrainingCards
          title="PEER SUPPORT GROUP MEETING,线上同伴互助交流舱"
          content=" Peer Support Group Meeting (以下简称为 PSG Meeting)
              为”解压舱乘客“提供了一个安全健康的团体心灵互助空间。在这三周里，每个解压舱的“乘客”与
              BeenThere leaders 每周都会进行一次 PSG Meeting。在 PSG
              Meeting中，BeenThere leaders
              将会带领大家围绕着共同挑选出来的主题进行个人感受和经历的分享。每一位“解压舱乘客”都有机会去倾诉心事和疏解情绪，同时也慢慢学会去倾听和陪伴彼此。这21天里，我们在一起，就不孤单。
          || 我们需要注意的是，PSG Meeting 不是专业的心理咨询。它由经过训练的
          BeenThere leaders 带领，专门提供同伴之间的帮助和心理支持的。"
        />
        <TrainingCards
          title="CREATIVE ACTIVITY,线上解压创意活动"
          content="与 PSG Meeting 搭配食用，每周一次的Creative Activity
              都会根据每个解压舱内“乘客”的时间和兴趣来定。|你以为就只有云健身、云冥想、云看电影嘛？|NO!NO!NO!|给你个小剧透吧，正经起来的我们会一起在舱内【寻找人生的意义】；嗨皮起来的我们说不定就会来一场让你过翻瘾的【云变装
              Party】哦～"
        />
        <TrainingCards
          title="JOURNEY MARKER,舱内打卡"
          content="有了舱内打卡，妈妈再也不用担心我会忘记这21天的旅程啦！|“情绪日记”、“人生之最”、“时间胶囊”……|等等打卡活动在向我们招手，仿佛在说：|“来嘛！咱一步步解锁这未知之旅！ 打卡选择完全由你决定～”"
        />
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
      </Section>
    </CSSTransition>
  );
}
export default React.memo(Training);
