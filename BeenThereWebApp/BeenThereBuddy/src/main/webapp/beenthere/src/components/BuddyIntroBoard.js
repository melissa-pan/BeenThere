import React from "react";
import BuddyDetail from "./BuddyDetail";
import style from "../global-style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Image from "../img/lexi_photo2.png";
import ImageA1 from "../img/Ellipse25.png";
import ImageA2 from "../img/Ellipse24.png";
import ImageA3 from "../img/Ellipse60.png";
import ImageA4 from "../img/Ellipse18.png";

import './BuddyintroBoard.css';
//import Img1  from "../../lexi_photo2.png";
// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  display: flex;
  justify-content:center;
  // text-align: center;
  // align-items: center;
  align-content: center;
  padding: 5rem;
  padding-top: 10rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    
    margin-bottom: 2rem;
  }
  .lable {
    box-sizing: border-box;
    width: 25%;
    height: 3rem;
    display: flex;
    justify-content:center;
    
    align-items: center;
    // align-items: flex-start;
    border-radius: 100px;
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-3"]};
    
    margin-bottom: 1rem;
    
    background: #f3f3ff;
  }
  .description {
    margin-right: 1rem;
    font-size: ${style["font-size-l"]};
    line-height: 2;
    text-align: "right";
    margin-bottom: 1.5rem;
    .p{
      line-height: normal;
    }
  }
  // .buddy-record {
  //   display: grid;
  //   grid-template-rows: repeat(2, 1fr);
  //   grid-template-columns: repeat(2, 1fr);
  //   justify-content: center;
  //   grid-column-gap: 2rem;
  //   grid-row-gap: 2rem;
  //   padding: 3rem 10rem;
  // }
  .hour {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    // width: 15%;
    height: 14.33px;
    display:flex;
    align-items:center;
    text-align:center;
    padding: 1rem;
    cursor: default;
    transition: all 0.2s;
    background: #FFF5E5;
    border-radius: 20px;
    margin-right:10px;
    border-bottom: 1px solid transparent;
    // :hover {
    //   width: 10rem;
    //   font-weight: bold;
    //   transform: translateX(1rem) scale(1.03);
    //   border-bottom: 1px solid ${style["highlight-color"]};
    // }
  }
  .button-1 {
    border: none;
    color: #787878;
    border-radius:  3rem 0px 0px 3rem;
    margin: 0;
    font-size: ${style["font-size-m"]};
    background-color: #ebf2ff;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
  .button-2 {
    border: none;
    border-radius: 0px 3rem 3rem 0px;
    color: #787878;
    font-size: ${style["font-size-m"]};
    background-color: #eaeaff;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
  .image {
    // width: 50%;
    // max-height: 20rem;
    margin-left: 1rem;
    align-items: center;
    /* margin-right: 2rem; */
    img {
      width: 100%;
    }
  }
  .img{
    width:100%;
    height:100%;
  }
`;
function BuddyIntroBoard(props) {
  const { history, route } = props;

  const buddy = [1].map((item, index) => ({
    id: index,
    info1: "#哈佛教育学院发展心理学硕士（在读）",
    info2: "#投身教育的国家二级心理咨询师姐姐",
    location: "#坐标：美国东部",
    count: "自加入BeenThere以来已经行次咨询",
  }));
  const handleClick = (id) => {
    history.push(`/mentors/${id}`);
  };
  return (
    <Section>
      
      <div className="image">
        <img src={Image} alt="buddy image" />
      </div>

      <div className="buddyInfor">
        <div className="infor">
          <div className="title">Hi! 我是Lexi</div>
          <div className="lable">
            TA的简介
          </div>
          <div className="description">
            <p>#哈佛教育学院发展心理学硕士（在读）</p>
            <p>#投身教育的国家二级心理咨询师姐姐</p>
            <p style={{ lineHeight: 'normal'}}>#坐标：美国东部</p>
            <p style={{ lineHeight: 'normal'}}>自加入BeenThere以来已经行 <b className="number">40</b> 次咨询</p>
          </div>
        </div>
        
        <div className="award">
          <div className="lable">
            TA的勋章
          </div>
          <div className="imageA">
            <img src={ImageA1} alt="buddy image" className="imageAward"/>
            <img src={ImageA2} alt="buddy image" className="imageAward"/>
            <img src={ImageA3} alt="buddy image" className="imageAward"/>
            <img src={ImageA4} alt="buddy image" className="imageAward"/>
          </div>
        </div>

        <div className="area">
          <div className="lable">
            擅长领域
          </div>
          
          <div className="areaList">
            <p className="button" >擅长领域</p>
            <p className="button">擅长领域</p>
            <p className="button">擅长领域</p>
            <p className="button">擅长领域</p>
            <p className="button">擅长领域</p>
            <p className="button">擅长领域</p>
          </div>
        </div>

        <div className="buddy-record">
          {buddy.map(({ id, name, info, location }) => (
            <div
              key={id}
              onClick={() => {
                handleClick(id);
              }}
            ></div>
          ))}
          
          <div className="twoButtons">
            <Link>
              <button className="button-1">和TA语音 </button>
            </Link>

            <Link>
              <button className="button-2">和TA视频 </button>
            </Link>
          </div>
          
        </div>
        <div className="donate">你在BeenThere购买的所有服务，都会有5%捐献给慈善组织</div>
        
      </div>
      

      {/* {renderRoutes(route.routes)} */}
    </Section>
  );
}
export default React.memo(withRouter(BuddyIntroBoard));
