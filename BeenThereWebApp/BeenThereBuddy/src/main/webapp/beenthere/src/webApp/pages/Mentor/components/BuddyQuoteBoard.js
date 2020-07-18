import React from "react";
import styled from "styled-components";
import style from "../../../global-style";
import mentor_vector_2 from "../../../../img/mentor_vector_2.svg";
import mentor_vector_3 from "../../../../img/mentor_vector_3.svg";
import Button from "../../../components/Button";

const Section = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 10rem;
  /* padding: 0 5rem; */
  position: relative;
  /* @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  } */
  .image {
    width: 30vw;
    /* widt0: 30vw; */
    display: flex;
    /* background-color: red; */
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    z-index: 1;

    @media (min-width: 93.75em) {
      width: 432px;
      margin: 0 auto;
    }
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .quote {
    width: 35vw;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    @media (min-width: 93.75em) {
      width: 504px;
      margin: 0 auto;
    }
    .mentor_vector_3 {
      width: 40%;
      position: absolute;
      transform: rotate(9deg);
      top: 20%;
      right: 80%;
      /* z-index: 0; */
    }
    &--card {
      width: 100%;
      background-color: ${style["theme-color-primary"]};
      z-index: 1;
      font-size: ${style["font-size-l"]};
      padding: 8rem;
      border-radius: 30px;
      color: ${style["font-color-light-1"]};
      line-height: ${style["line-height-l"]};
      margin-bottom: 1rem;
      flex: 0 0 1;
      span {
        display: block;
        text-align: left;
        &:not(:last-child) {
          margin-bottom: 2.5rem;
        }
      }
    }
    &--buttons {
      display: flex;
      justify-content: space-evenly;
      /* z-index: 1; */
      margin-bottom: 1rem;
    }
    .donate {
      color: ${style["highlight-color"]};
      font-size: ${style["font-size-s"]};
      text-align: center;
    }
  }
  .mentor_vector_2 {
    position: absolute;
    bottom: 2rem;
    right: -5rem;
    z-index: 0;
    transform: rotate(9deg);

    width: 20vw;
    @media (min-width: 93.75em) {
      width: 288px;
      margin: 0 auto;
    }
    img {
      width: 100%;
    }
  }
`;
const BuddyQuoteBoard = React.forwardRef((props, ref) => {
  const { handleShowChecklist } = props;
  const { service, id, avatar } = props;

  return (
    <Section ref={ref}>
      <div className="quote">
        <img
          src={mentor_vector_3}
          className="mentor_vector_3"
          alt="background"
        />
        <div className="quote--card">
          <span>加入Been There是我向自己的梦想勇敢迈开的一小步</span>
          <span>
            但我相信随着更多mentor和mentee的加入，未可知不会是中国心理健康迈开的一大步。
          </span>
          <span>不管是风里雨里还是波士顿的大雪里，我在Been There等你 ♥</span>
        </div>
        {service ? (
          <React.Fragment>
            <div className="quote--buttons">
              <a href="#" onClick={handleShowChecklist}>
                <div className="button">
                  <Button
                    background="#a7a7ff"
                    fontColor="#ffffff"
                    hoverBackground="#9c9cff"
                  >
                    和TA语音
                  </Button>
                </div>
              </a>
              <a href="#" onClick={handleShowChecklist}>
                <div className="button">
                  <Button
                    background="#9ec5ff"
                    fontColor="#ffffff"
                    hoverBackground="#9fcbff"
                  >
                    和TA视频
                  </Button>
                </div>
              </a>
            </div>
            <div className="donate">
              <p>*你在BeenThere购买的所有服务，都会有5%捐献给慈善组织</p>
            </div>
          </React.Fragment>
        ) : (
          <p>暂未开通语音视频服务</p>
        )}
      </div>
      <div className="image">
        {/* <img src={mentor_vector_2} className="mentor_vector_2" /> */}
        <img
          src={`/avatars/${avatar}`}
          className="feature__photo"
          alt="feature photo"
        />
      </div>
      <div className="mentor_vector_2">
        <img src={mentor_vector_2} alt="mentor_vector" />
      </div>
    </Section>
  );
});

export default React.memo(BuddyQuoteBoard);
