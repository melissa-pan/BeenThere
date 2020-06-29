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
    width: 50rem;
    height: 50rem;
    margin-left: 1rem;

    align-items: center;
    /*margin-right: 2rem; */
    img {
      width: 100%;
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
`;

export const Gallery = styled.div`
  display: grid;
  grid-column: full-start/full-end;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  width: 100%;
  margin-bottom: 5rem;
  .gallery {
    &__image {
      align-items: center;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    &__item {
      &--1 {
        grid-row: 1 / 3;
        grid-column: 1/2;
        display: flex;
      }
      &--2 {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        display: flex;
      }
      &--3 {
        grid-row: 3 / 3;
        grid-column: 2/3;
        display: flex;
      }
    }
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
        <p>视频标题</p>
      </div>

      <Gallery className="gallery">
        <figure className="gallery__item--1">
          <img src={Gallery1} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--2">
          <img src={Gallery2} alt="gallery" className="gallery__image" />
        </figure>
        <figure className="gallery__item--3">
          <img src={Gallery3} alt="gallery" className="gallery__image" />
        </figure>
      </Gallery>

      <button className="button">查看更多 </button>

      {/* {renderRoutes(route.routes)} */}
    </Section>
  );
}
export default React.memo(withRouter(BuddyVideo));
