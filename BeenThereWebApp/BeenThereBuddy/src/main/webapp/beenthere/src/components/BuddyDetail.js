import React from "react";
import styled from "styled-components";
import style from "../global-style";
import Image from "../img/Ellipse_7.png";
const Section = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 30px;
  padding: 2rem;
  background-color: ${style["theme-color-primary"]};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${style["theme-color-primary-2"]};
  }
  &:hover .more {
    color: ${style["highlight-color"]};
  }
  @media (max-width: 37.5em) {
    flex-direction: column;
  }
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
  .info {
    font-size: ${style["font-size-m"]};
  }
  .location {
    font-size: ${style["font-size-m"]};
  }

  .more {
    font-size: 2rem;
    position: absolute;
    right: 5rem;
    bottom: 2.5rem;
    color: ${style["font-color-light-2"]};
    font-size: ${style["font-size-m"]};
    transition: color 0.2s;
  }
`;

function BuddyDetail(props) {
  const { name, info, location } = props;
  // const { handleClick } = props;
  return (
    <Section>
      <div className="image">
        <img src={Image} alt="buddy image" />
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="info">{info}</div>
        <div className="location">{location}</div>
        <div className="more"> 详情 &rarr;</div>
      </div>
    </Section>
  );
}
export default React.memo(BuddyDetail);
