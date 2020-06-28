import React from "react";
import styled from "styled-components";
import style from "../global-style";
import quote from "../img/quote.jpg";
import buttom1 from "../img/buttom1.png";
import photo from "../img/lexi_photo2.png";
import { Link } from "react-router-dom";
const Section = styled.div`
  text-align: center;
  padding: 5rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
  }
  .text {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-s"]};
    margin-bottom: 2rem;
    &__highlight {
      color: ${style["highlight-color"]};
      /* transition: all 0.2s; */
    }
    &__highlight:hover {
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
  .text {
    width: 50%;
    margin: 3rem auto;
  }
`;
const Card = styled.div`
  padding: 6rem;
  border-radius: 3rem;
  line-height: ${style["line-height-s"]};
  cursor: pointer;
  .feature {
    color: ${style["font-color-light-1"]};
    &__text1 {
      font-size: ${style["font-size-s"]};
      margin-bottom: 4rem;
    }
    &__text2 {
      font-size: ${style["font-size-s"]};
      margin-bottom: 4rem;
    }
    &__text3 {
      font-size: ${style["font-size-s"]};
      margin-bottom: 4rem;
    }
    &__quote {
      width: 20rem;
      height: 20rem;
      margin-left: 1rem;
      align-items: center;
      /* margin-right: 2rem; */
      img {
        width: 60%;
      }
    }
  }
`;
function BuddyQuoteBoard() {
  return (
    <Section>
      <img src={quote} className="feature__quotebg" alt="feature quotebg" />
      <img src={photo} className="feature__photo" alt="feature photo" />
      <Link>
        <button className="button-1">和TA语音 </button>
      </Link>
    </Section>
  );
}

/**<Section>
<div className="features">
<Card className="features__quote">
  <img src={background} className="feature__quotebg" alt="feature quotebg" />
  <div className="feature__text1">
      加入Been There是我向自己的梦想勇敢迈开的一小步
  </div>
  <div className="feature__text2">
      但我相信随着更多mentor和mentee的加入，未可知不会是中国心理健康迈开的一大步。
  </div>
  <div className="feature__text3">
      不管是风里雨里还是波士顿的大雪里，我在Been There等你 ♥
  </div>
</Card>
<Card className="features__photo">
  <img src={photo} className="feature__photo" alt="feature photo" />
</Card>
<Link>
<Card className="features__card--3 feature">
  <img src={buttom1} className="feature__buttom1" alt="feature buttom1" />
  <div className="feature__buttom1_text">
     与TA语音
  </div>
</Card>
</Link>
</div>
</Section>

*/
export default React.memo(BuddyQuoteBoard);
