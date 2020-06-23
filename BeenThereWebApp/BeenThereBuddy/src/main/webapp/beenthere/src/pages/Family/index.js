import React from "react";
import { Section, Gallery } from "./style";
import Video from "../../img/spotlight.png";
import Credentials from "../../img/credentials.png";
import Button from "../../components/Button";
import Gallery11 from "../../img/gallery_1_1.png";
import Gallery12 from "../../img/gallery_1_2.png";
import Gallery31 from "../../img/gallery_3_1.png";
function Family() {
  return (
    <Section>
      {" "}
      <div className="title">BeenThere 大家庭</div>
      <div className="description--1">
        <p>BeenThere 是一个源自哈佛中国学生的成长互助社区</p>
        <p>一个spotlight视频快速了解我们：</p>
      </div>
      <div className="video">
        <img src={Video} alt="spotlight" />
      </div>
      <div className="description--2 ">
        大家族成员已超过100人。目前我们已100余位Online
        Buddy，TA们是来自世界各地名校的活跃志愿者，位于美国、中国、加拿大、澳大利亚、日本、英国等国家，TA们的背景涵盖哈佛、麻省理工、斯坦福、牛津、剑桥、宾大、哥大、伯克利、清华、北大、复旦等海内外名校。
      </div>
      <Gallery className="gallery">
        <figure className="gallery__item--1">
          <img src={Gallery11} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--2">
          <img src={Gallery12} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--3">
          <div className="gallery__text">
            我们来自各地, 有着不同的经历 将我们连结在一起的，是那句
            “经历过，所以懂”
          </div>
        </figure>
        <figure className="gallery__item--4">
          <img src={Gallery11} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--5">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--6">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--7">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--8">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--9">
          <div className="gallery__text">
            “莫愁前路无知己， BeenThere Buddy 在等你”
          </div>
        </figure>
        <figure className="gallery__item--10">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--11">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--12">
          <img src={Gallery31} alt="gallery" className="gallery__image" />
        </figure>
      </Gallery>
      <div className="credentials">
        <div className="description--3">赞助团体 / Credentials</div>
        <img
          src={Credentials}
          alt="Credentials"
          className="credentials__icon"
        />
      </div>
      <Button>加入我们</Button>
    </Section>
  );
}
export default React.memo(Family);
