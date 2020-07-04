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
  background-color: ${(props) =>
    props.colorChange
      ? props.colorChange.background
      : style["theme-color-primary"]};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.colorChange
        ? props.colorChange.hoverBackground
        : style["theme-color-primary-2"]};
  }
  &:hover .icon {
    path {
      fill: ${(props) =>
        props.colorChange ? props.colorChange.color : style["highlight-color"]};
    }
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
    padding: 0 5rem 0 2rem;
    text-align: left;
    line-height: ${style["line-height-l"]};
  }
  .name {
    font-size: ${style["font-size-l"]};
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .info {
    font-size: ${style["font-size-m"]};
  }
  .location {
    font-size: ${style["font-size-m"]};
  }

  .icon {
    transition: color 0.2s;
  }
  .label {
    &--list {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
    }
    &--item {
      border-radius: 20px;
      background: white;
      font-size: ${style["font-size-s"]};
      color: ${(props) =>
        props.colorChange ? props.colorChange.color : style["highlight-color"]};
      height: 2.5rem;
      padding: 0.2rem 0.7rem;
      margin: 0.5rem;
    }
  }
`;

function BuddyDetail(props) {
  const arrowIcon = (
    <svg
      t="1593744780656"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7211"
      width="25"
      height="25"
    >
      <path
        d="M755 416H160q-14 0-23-9t-9-23 9-23 23-9h595L521 119q-9-10-9-23t9.5-22.5T544 64t23 9l288 288q9 10 9 23t-9 23L567 695q-10 9-23 9t-22.5-9.5T512 672t9-23z"
        p-id="7212"
        fill="#D3D3D3"
      ></path>
    </svg>
  );
  const { colorChange } = props;

  const { name, info, location } = props;
  // const { handleClick } = props;
  return (
    <Section colorChange={colorChange}>
      <div className="image">
        <img src={Image} alt="buddy" />
      </div>
      <div className="detail">
        <div className="name">
          {name.toUpperCase()} {arrowIcon}
        </div>
        <div className="info">{info}</div>
        <div className="location">坐标：{location}</div>
        <div className="label--list">
          <p className="label--item">擅长领域</p>
          <p className="label--item">擅长领域</p>
          <p className="label--item">擅长领域</p>
        </div>
      </div>
    </Section>
  );
}
export default React.memo(BuddyDetail);
