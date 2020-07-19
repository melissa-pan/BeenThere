import React from "react";
import style from "../../../global-style";
import styled from "styled-components";

const Section = styled.div`
  text-align: center;
  margin: 10rem;
  padding: 0 15rem;
  @media (max-width: 56.25em) {
    margin: 60px;
    padding: 30px;
  }
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

const BuddyVideo = React.forwardRef((props, ref) => {
  const { video, name, id } = props;
  return (
    <Section ref={ref}>
      {video && (
        <React.Fragment>
          <div className="title">TA的视频</div>

          <div className="video-section">
            <div className="video">
              <iframe
                title="mentor video"
                width="100%"
                height="100%"
                src={video}
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
                allowFullScreen={true}
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
      )}
    </Section>
  );
});
export default React.memo(BuddyVideo);
