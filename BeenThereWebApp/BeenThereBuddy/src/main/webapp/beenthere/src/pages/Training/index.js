import React from "react";
import {
  Container,
  Card,
  Cards,
  Description,
  CardDescription,
  QRcode,
  Section,
} from "./style";
import Button from "../../components/Button";
import Introduction from "../../components/Introduction";
import Carousel from "../../components/Carousel";
import top1 from "../../img/top_1.png";
import video from "../../img/jieyacang.png";
import photo1 from "../../img/test1_1.png";
import photo2 from "../../img/spaceship_22_1.png";
import training_vector_1 from "../../img/training_vector_1.png";
import training_vector_2 from "../../img/training_vector_2.png";
import qrtree from "../../img/qr_tree_1.png";
import qrcode from "../../img/qrfinal.png";
import { Autoplay } from "swiper/js/swiper.esm";
import card1 from "../../img/交流_1.svg";
import card2 from "../../img/创意_1.svg";
import card3 from "../../img/打卡_1.svg";

import background from "../../img/background.png";

export default function Training() {
  const introRender = () => {
    return (
      <Container>
        <div className="photo photo--1">
          <img src={photo1} alt="photo" />
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

  const cardRender = () => {
    const handleExpand = () => {
      // const card = document.getElementsByName();
    };
    return (
      <Cards>
        <Card className="card--1" onClick={handleExpand}>
          <div className="card-img">
            <img src={card1} alt="card 1" />
          </div>
          <CardDescription className="card-description">
            <h2 className="title title--2">
              <span>PEER SUPPORT GROUP MEETING</span>
              <span> 线上同伴互助交流舱</span>
            </h2>

            <div className="content content--2">
              <span>
                Peer Support Group Meeting (以下简称为 PSG Meeting)
                为”解压舱乘客“提供了一个安全健康的团体心灵互助空间。在这三周里，每个解压舱的“乘客”与
                BeenThere leaders 每周都会进行一次 PSG Meeting。在 PSG
                Meeting中，BeenThere leaders
                将会带领大家围绕着共同挑选出来的主题进行个人感受和经历的分享。每一位“解压舱乘客”都有机会去倾诉心事和疏解情绪，同时也慢慢学会去倾听和陪伴彼此。这21天里，我们在一起，就不孤单。
              </span>
              <br></br>
              <span>
                我们需要注意的是，PSG Meeting 不是专业的心理咨询。它由经过训练的
                BeenThere leaders 带领，专门提供同伴之间的帮助和心理支持的。
              </span>
            </div>
          </CardDescription>
        </Card>
        <Card className="card--2">
          <div className="card-img">
            <img src={card2} alt="card 1" />
          </div>
          <CardDescription className="card-description">
            <h2 className="title title--2">
              <span>CREATIVE ACTIVITY</span>
              <span>线上解压创意活动 </span>
            </h2>

            <div className="content content--2">
              <span>
                与 PSG Meeting 搭配食用，每周一次的Creative Activity
                都会根据每个解压舱内“乘客”的时间和兴趣来定。
              </span>
              <br></br>
              <span>你以为就只有云健身、云冥想、云看电影嘛？</span>
              <span> NO!NO!NO!</span>
              <br></br>
              <span>
                给你个小剧透吧，正经起来的我们会一起在舱内【寻找人生的意义】；嗨皮起来的我们说不定就会来一场让你过翻瘾的【云变装
                Party】哦～
              </span>
            </div>
          </CardDescription>
        </Card>
        <Card className="card--3">
          <div className="card-img">
            <img src={card3} alt="card 1" />
          </div>
          <CardDescription className="card-description">
            <h2 className="title title--2">
              <span>JOURNEY MARKER</span>
              <span>舱内打卡</span>
            </h2>

            <div className="content content--2">
              <span>
                有了舱内打卡，妈妈再也不用担心我会忘记这21天的旅程啦！
              </span>
              <br></br>
              <span>“情绪日记”、“人生之最”、“时间胶囊”……</span>
              <span>等等打卡活动在向我们招手，仿佛在说：</span>
              <br></br>
              <span>
                “来嘛！咱一步步解锁这未知之旅！ 打卡选择完全由你决定～”
              </span>
              <br></br>
            </div>
          </CardDescription>
        </Card>
      </Cards>
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

  return (
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
      {cardRender()}
      <Description>
        <div className="title title--center">BeenThere Buddy 导师团队</div>
        <div className="content content--center">
          <p>
            目前我们已有100余位online Buddy，TA们是来自世界各地名校的活跃志愿者
          </p>
          <p>
            来自哈佛、麻省理工、斯坦福、伯克利、清华、北大、复旦等海内外名校
          </p>
        </div>
      </Description>
      <Carousel />
      <Introduction swiperColor="rgba(91, 115, 123, 0.8)" fontColor="#fff2df" />
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
  );
}
