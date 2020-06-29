import React from "react";
import style from "../global-style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Image from "../img/lexi_v.png";
import Gallery1 from "../img/lexi_v1.png";
import Gallery2 from "../img/lexi_v2.png";
import Gallery3 from "../img/lexi_v3.png";
// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  text-align: center;
  padding: 5rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }
  .vedioTitle {
    margin-right: 1rem;
    font-size: ${style["font-size-l"]};
    line-height: 2;
    text-align: left;
    margin-bottom: 2rem;
  }

  .image {
    
     //width:50%;
    // width: 50rem;
    // height: 50rem;
    // margin-left: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    /*margin-right: 2rem; */
    margin-bottom:2rem;
    img {
      width: 100%;
      margin: 0 50%;
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
  .videoTitle{
    justify-content: start;
    text-align: start;
    margin: 0 11%;
    margin-bottom: 4rem;
    font-size: ${style["font-size-l"]};
  }
  .bar{
    margin: 0 11%;
    border: 1px solid #E5E5E5;
    margin-bottom: 2rem;
  }
  galleryimage{
    width: 100%;
    height:100%;
    display:box;
  }
  .gallery{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;

  }
  
`;


function BuddyVideo(props) {
  const { history, route } = props;
  // console.log(route);
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  return (
    <Section>
      <div className="title">TA的视频</div>
      <div className="image">
        <img src={Image} alt="buddy video" />
      </div>
      <div className="videoTitle">
        <p>这里是视频标题</p>
      </div>
      <div className='bar'></div>
      <div className="gallery">
          <img src={Gallery1} alt="gallery" className="galleryimage" />
        
          <img src={Gallery2} alt="gallery" className="galleryimage" />
        
          <img src={Gallery3} alt="gallery" className="galleryimage" />
        
      </div>

      <button className="button">查看更多 </button>

      {/* {renderRoutes(route.routes)} */}
    </Section>
  );
}
export default React.memo(withRouter(BuddyVideo));
