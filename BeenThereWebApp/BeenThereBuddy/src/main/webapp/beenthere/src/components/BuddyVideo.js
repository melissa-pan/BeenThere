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
  margin: 10rem;
  padding: 0 15rem;
  @media (max-width: 37.5em) {
    margin: 10px;
    padding: 20px;
  }
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }
  .video-section {
    width: 100%;
  }
  .video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 550px;
    @media (max-width: 56.25em) {
      height: 400px;
    }

    /*margin-right: 2rem; */
    margin-bottom: 2rem;
    .videoTitle {
      margin: 2rem;
      width: 100%;
      font-size: ${style["font-size-l"]};

      /* margin: 0 50%; */
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

  .gallery {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
    border-top: 1px solid #e5e5e5;
    padding-top: 3rem;
    &--image {
      width: 90%;
      height: 100%;
    }
  }
`;

function BuddyVideo(props) {
  const { video, name, id } = props;
  return (
    <Section>
      <div className="title">TA的视频</div>
      {video ? (
        <React.Fragment>
          <div className="video-section">
            <div className="video">
              {/* <iframe width="420" height="315" src={video[0]}></iframe> */}
              <iframe
                title="mentor video"
                width="100%"
                height="100%"
                src={
                  id === "1"
                    ? "//player.bilibili.com/player.html?aid=796143240&bvid=BV1vC4y187pT&cid=209242025&page=1"
                    : "//player.bilibili.com/player.html?aid=456306409&bvid=BV1c5411e74v&cid=209290011&page=1"
                }
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              ></iframe>
              <div className="videoTitle">{name} 个人介绍</div>
            </div>
          </div>
          {/* <div className="bar"></div> */}
          {/* <div className="gallery">
            <figure>
              <img src={Gallery1} alt="gallery" className="gallery--image" />
            </figure>
            <figure>
              <img src={Gallery2} alt="gallery" className="gallery--image" />
            </figure>
            <figure>
              <img src={Gallery3} alt="gallery" className="gallery--image" />
            </figure>
          </div>

          <button className="button">查看更多 </button> */}
        </React.Fragment>
      ) : (
        <p>空空如也</p>
      )}
    </Section>
  );
}
export default React.memo(BuddyVideo);
