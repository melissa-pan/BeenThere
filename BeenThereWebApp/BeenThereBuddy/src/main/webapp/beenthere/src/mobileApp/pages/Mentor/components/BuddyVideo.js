import React from "react";
import style from "../../../global-style";
import styled from "styled-components";

const Section = styled.div`
  text-align: center;
  padding-top: 60px;
  padding-bottom: 130px;
  display: ${(props) => (props.showStatus ? "block" : "none")};
  .video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 300px;
    margin: 0 auto;
    .videoTitle {
      margin: 10px;
      width: 100%;
      font-size: ${style["font-size-s"]};
    }
  }
`;

const BuddyVideo = (props) => {
  const { video, name, showStatus } = props;
  return (
    <Section showStatus={showStatus}>
      {video && (
        <React.Fragment>
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
};
export default React.memo(BuddyVideo);
