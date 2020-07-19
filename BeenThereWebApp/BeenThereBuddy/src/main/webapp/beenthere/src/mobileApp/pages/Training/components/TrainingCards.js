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
    position: relative;
    .icon {
      position: absolute;
      transform: ${(props) =>
        props.showDetails ? "rotate(90deg)" : "rotate(-90deg)"};
      top: 20%;
      right: 0;
    }
  }
  .content {
    font-size: ${style["font-size-s"]};
    color: ${style["color-yellow-3"]};
    line-height: ${style["line-height-l"]};
    width: 265px;
    margin: 0 auto;
    padding: 30px 0;
    display: ${(props) => (props.showDetails ? "block" : "none")};
    border-bottom: 1px solid #f7f7f7;
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
const arrowIcon = (
  <svg
    t="1595034698857"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2409"
    width="40"
    height="40"
  >
    <path
      d="M640 674.133333l-166.4-166.4L640 341.333333a41.258667 41.258667 0 0 0 0-59.733333 41.258667 41.258667 0 0 0-59.733333 0l-196.266667 196.266667a41.258667 41.258667 0 0 0 0 59.733333l196.266667 196.266667A42.24 42.24 0 1 0 640 674.133333z"
      p-id="2410"
      fill="#fefbf6"
    ></path>
  </svg>
);
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
        {arrowIcon}
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
