import React, { useState } from "react";
import styled from "styled-components";
import style from "../global-style";

import card1 from "../img/交流_1.png";

export const Container = styled.div`
  width; 100rem;
  .photo{

  }
  .fold{
    height: 15rem;
    &__header{
      color:#FEFBF6;
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      span {
        display: block;
        line-height: ${style["line-height-ll"]};
      }
    }
    &--1{
      background-color:rgba(115, 91, 123, 0.8);     
    }
  }
  .unfold{
    height: 30rem;
    &__header{
      color:#FEFBF6;
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      span {
        display: block;
        line-height: ${style["line-height-ll"]};
      }
    &__content {
      color:#FFF2DE;
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-m"]};
      margin-bottom: 3rem;
      span {
        display: block;
        line-height: ${style["line-height-m"]};
      }
    }
    &--1{
      background-color:rgba(115, 91, 123, 0.8);
      img{
        padding-top: 4rem;
        padding-left: 4rem;
        width: 21%;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  margin-left: 16rem;
  padding: 2rem;
  flex-direction: column;
  .card{
    width: 100rem;
    height: 30rem;
    border-radius: 30px;
    &--1{
      img{
        padding-top: 4rem;
        padding-left: 4rem;
        width: 21%;
      }
    }
    &--2{
      background-color:rgba(93, 91, 123, 0.8);
      height:15rem;
    }
  }
`;




export default function setCards(){
  const [collapsed, setCollapsed] = useState(false);
  const handleClick=() => {
    setCollapsed(!collapsed);
  };
  return(
    <div className="card" onclick={handleClick}>
      {collapsed 
        ? <Container>
            <div className="fold fold--1">
              <h2 className="fold__header">
                <span>PEER SUPPORT GROUP MEETING</span>
                <span>线上同伴互助交流舱</span>
              </h2>
            </div>
        </Container>
        : <Container>
            <div className="photo photo--1">
              <img src={card1} alt="card photo 1" />
            </div>
            <div className="unfold unfold--1">
              <h2 className="unfold__header">
                <span>PEER SUPPORT GROUP MEETING</span>
                <span>线上同伴互助交流舱</span>
              </h2>
              <h3 className="unfold__content">
                <span>balabala</span>
                <span>balabala</span>
              </h3>
            </div>
        </Container>
      }
      
    </div>  
  );
}
