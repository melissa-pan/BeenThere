import React from "react";
import style from "../global-style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Image from "../img/lexi_v.png";
import Article from "../img/article.png";

// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  text-align: center;
  padding: 5rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }
  .articleTitle {
    margin-right: 1rem;
    font-size: ${style["font-size-l"]};
    line-height: 2;
    textAlign: left
    margin-bottom: 5rem;
  }
  
  .articlePic {
    width: 80rem;
    height: 80rem;
    margin-left: 1rem;
    
    align-items: center;
     /*margin-right: 2rem; */
    img {
      width: 100%;
    }
  .article {
      width: 30rem;
      height: 30rem;
      margin-left: 1rem;
      
      align-items: center;
       /*margin-right: 2rem; */
      img {
        width: 60%;
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
  
`;


function BuddyArticle(props) {
  const { history, route } = props;
  // console.log(route);
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  return (
    <Section>
      
      <div className="title">TA的文章</div>
      <div className="image">
        <img src={Image} alt="articlePic" />
      </div>
      <br />
      <br />
      <br />
      <div className="articleTitle">
          <p>
            文章标题
          </p>
        
      </div>

      <div className="article">
        <img src={Article} alt="article" />
      </div>
      <button className="button">展开 </button>

      {/* {renderRoutes(route.routes)} */}
    </Section>
    
  );
}
export default React.memo(withRouter(BuddyArticle));
