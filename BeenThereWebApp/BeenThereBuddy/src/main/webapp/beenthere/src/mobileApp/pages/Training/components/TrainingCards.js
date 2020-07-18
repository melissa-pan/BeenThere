import React, { useState } from "react";
import styled from "styled-components";
import style from "../../../global-style";
import card1 from "../../../../img/交流_1.svg";
import card2 from "../../../../img/创意_1.svg";
import card3 from "../../../../img/打卡_1.svg";

export const Card = styled.div`
  width: 100%;

  margin-bottom: 0;
  transition: all 0.3s;
  text-align: left;
  .title {
    font-size: ${style["font-size-m"]};
    color: ${style["highlight-color"]};
    line-height: ${style["line-height-l"]};
    width: 305px;
    margin: 0 auto;
    padding: 15px 30px;
    border-top: 1px solid #f7f7f7;
    border-bottom: 1px solid #f7f7f7;
  }
  .content {
    font-size: ${style["font-size-s"]};
    color: ${style["color-yellow-3"]};
    line-height: ${style["line-height-l"]};
    width: 265px;
    margin: 0 auto;
    padding: 30px 0;
    display: ${(props) => (props.showDetails ? "block" : "none")};
  }
  .card-img {
    flex: 0 0 35%;
    height: 30vw;
    /* width: 30vw; */
    border-right: 3px solid rgba(255, 255, 255, 0.2);
    position: relative;
    padding: 4rem;
  }
`;

function TrainingCards(props) {
  const { title, content } = props;
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <Card showDetails={showDetails}>
      <h2 className="title" onClick={handleClick}>
        {title.split(",").map((item) => (
          <span>
            {item}
            <br />
          </span>
        ))}
      </h2>

      <div className="content">
        {content.split("|").map((item) => (
          <span>
            {item}
            <br />
          </span>
        ))}
      </div>
    </Card>
  );
}

export default React.memo(TrainingCards);
