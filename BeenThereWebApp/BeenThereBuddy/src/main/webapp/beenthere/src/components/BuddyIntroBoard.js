import React from "react";
import BuddyDetail from "./BuddyDetail";
import style from "../global-style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Image from "../img/lexi_photo2.png";
//import Img1  from "../../lexi_photo2.png";
// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  text-align: left;
  padding: 5rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }
  .lable {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
    background:#F3F3FF
  }
  .description {
    margin-right: 1rem;
    font-size: ${style["font-size-l"]};
    line-height: 2;
    textAlign: 'right'
    margin-bottom: 3rem;
  }
  .buddy-record {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 3rem 10rem;
  }
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
  .button-1 {
    border: none;
    color:  #787878;
    font-size: ${style["font-size-m"]};
    background-color: #EBF2FF;
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
    boarder-radius: 3rem;
    color:  #787878;
    font-size: ${style["font-size-m"]};
    background-color: #EAEAFF;
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
    width: 40rem;
    height: 40rem;
    margin-left: 1rem;
    align-items: center;
    /* margin-right: 2rem; */
    img {
      width: 100%;
    }
  
`;
function BuddyIntroBoard(props) {
  const { history, route } = props;
  // console.log(route);
  const buddy = [1].map((item, index) => ({
    id: index,
    info1: "#哈佛教育学院发展心理学硕士（在读）",
    info2: "#投身教育的国家二级心理咨询师姐姐",
    location: "#坐标：美国东部",
    count:"自加入BeenThere以来已经行次咨询"

  }));
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  return (
    <Section>
      
      <div className="title">Hi! 我是Lexi</div>
      <div className="image">
        <img src={Image} alt="buddy image" />
      </div>
      <div className="lable">
          <p>
            TA的简介
          </p>
        
      </div>

      <div className="description">
        <p>
            #哈佛教育学院发展心理学硕士（在读）
        </p>
        <p>
            #投身教育的国家二级心理咨询师姐姐
        </p>
        <p>
            #坐标：美国东部
        </p>
        <p>
          自加入BeenThere以来已经行 40 次咨询
        </p>
      </div>
      <div className="buddy-record">
        {buddy.map(({ id, name, info, location }) => (
          <div
            key={id}
            onClick={() => {
              handleClick(id);
            }}
          >
                    
          </div>
        ))}
        <Link>
            <button className="button-1">和TA语音 </button>
        </Link>
        <Link>
            <button className="button-2">和TA视频 </button>
        </Link>
      </div>

      {/* {renderRoutes(route.routes)} */}
    </Section>
  );
}
export default React.memo(withRouter(BuddyIntroBoard));
