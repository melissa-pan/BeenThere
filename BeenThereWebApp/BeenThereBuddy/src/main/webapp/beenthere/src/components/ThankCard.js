import React from "react";
import style from "../global-style";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Card from "../img/thankcard.png";

// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  text-align: center;
  padding: 5rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }  
  .Card {
    width: 80rem;
    height: 80rem;
    margin-left: 1rem;
    align-items: center;
     /*margin-right: 2rem; */
    img {
      width: 100%;
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


function ThankCard(props) {
  const { history, route } = props;
  // console.log(route);
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  return (
    <Section>
      <div className="title">TA的感谢卡</div>
      <br />
      <br />
      <br />
      <div className="article">
        <img src={Card} alt="Card" />
      </div>
      <button className="button">展开 </button>
      
      
      {/* {renderRoutes(route.routes)} */}
    </Section>
    
  );
}
export default React.memo(withRouter(ThankCard));
