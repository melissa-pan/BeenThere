import React, { Component } from "react";
import styled from "styled-components";
import style from "../global-style";
import Image from "../img/Ellipse_7.png";

const Section = styled.div`
  color: #fff2de;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 30px;
  padding: 2rem;
  height: 36rem;
  width: 60rem;
  background-color: rgba(115, 91, 123, 0.8);
  .image {
    width: 16rem;
    height: 16rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    /* margin-right: 2rem; */
    img {
      width: 100%;
    }
    @media (max-width: 56.25em) {
      width: 12rem;
      height: 12rem;
    }
    @media (max-width: 37.5em) {
      flex-direction: column;
      width: 4rem;
      height: 4rem;
    }
  }
  .detail {
    padding: 0 2rem;
    text-align: left;
    line-height: ${style["line-height-l"]};
  }
  .name {
    font-size: ${style["font-size-l"]};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .school {
    font-size: ${style["font-size-m"]};
  }
  .info {
    font-size: ${style["font-size-m"]};
  }
  .location {
    font-size: ${style["font-size-m"]};
  }
  .more {
    font-size: ${style["font-size-m"]};
  }
`;

const buddy = [1, 2, 3].map((item, index) => ({
  id: index,
  name: "Hi! 我是Lexi",
  school: "#哈佛教育学院发展心理学硕士（在读）",
  info: "#投身教育的国家二级心理咨询师姐姐",
  location: "#坐标：美国东部",
}));
const enterDetail = (item) => {
  console.log(item.id, "mentors");
};
function BuddyDetail(props) {
  const { name, info, location, school } = props;
  // const { handleClick } = props;
  return (
    <Section>
      <div className="image">
        <img src={Image} alt="buddy image" />
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="school">{school}</div>
        <div className="info">{info}</div>
        <div className="location">{location}</div>
        <div className="more">
          不管是风里雨里还是波士顿的大雪里 我在BeenThere等你 ❤
        </div>
      </div>
    </Section>
  );
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //图片轮播div样式相关参数
      width: "60rem",
      transition: "500ms ease-out",
      transform: "translateX(0px)",
      countnum: 3, //图片数量
      curPageIndex: 0, //点击右箭头+1，左箭头减1
      viewcount: 1, //初始展示图片数量（和div宽度相关）
      Larrowstate: true,
      Rarrowstate: true,
    };
  }
  //函数
  handleclickPrev() {
    let { countnum, viewcount, curPageIndex, Rarrowstate } = this.state;
    if (curPageIndex === countnum - viewcount) {
      this.setState({
        Rarrowstate: !Rarrowstate,
      });
    }
    this.getPage(curPageIndex - 1);
  }

  handleclickNext() {
    let { countnum, viewcount, curPageIndex, Rarrowstate } = this.state;
    if (curPageIndex < 0) {
      curPageIndex = 0;
    }
    if (curPageIndex === 0) {
      this.setState({
        Larrowstate: true,
      });
    }
    this.getPage(curPageIndex + 1);
  }

  getPage(value) {
    let { countnum, viewcount, Larrowstate, Rarrowstate } = this.state;
    let n = countnum - viewcount;
    //一项的宽度
    let itemwidth = 60;
    let transform = "translatex(-" + value * itemwidth + "rem)";
    value > n || 0 > value || this.setState({ transform: transform });
    this.setState({
      curPageIndex: value,
    });
    if (value == 0) {
      this.setState({
        Larrowstate: !Larrowstate,
      });
    }
    if (value == n) {
      this.setState({
        Rarrowstate: !Rarrowstate,
      });
    }
  }
  render() {
    let { width, transition, transform, Larrowstate, Rarrowstate } = this.state;
    let LArrowClaName = Larrowstate ? "arrow_l" : "hidden";
    let RArrowClaName = Rarrowstate ? "arrow_r" : "hidden";
    return (
      <div>
        {buddy.map((item) => (
          <div key={item.id} onClick={() => enterDetail(item)}>
            <BuddyDetail
              background=""
              image=""
              name={item.name}
              info={item.info}
              location={item.location}
              key={item.id}
            />
          </div>
        ))}
        <a
          href="javascript:;"
          className={LArrowClaName}
          onClick={() => this.handleclickPrev()}
        >
          prev
        </a>
        <a
          href="javascript:;"
          className={RArrowClaName}
          onClick={() => this.handleclickNext()}
        >
          next
        </a>
      </div>
    );
  }
}
