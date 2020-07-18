import React from "react";
import styled from "styled-components";
import style from "../../../global-style";
import Icon1 from "../../../../img/Ellipse_18.svg";
import Icon2 from "../../../../img/Ellipse_24.svg";
import Icon3 from "../../../../img/Ellipse_25.svg";
import { Link } from "react-router-dom";
const Section = styled.div`
  text-align: center;
  display: flex;
  /* padding: 20px; */
  height: 110px;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100px;
  justify-content: space-evenly;
  align-items: center;

  .icon {
    width: 50px;
  }

  .text {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-light-1"]};

    line-height: ${style["line-height-m"]};
  }
`;
function Features() {
  return (
    <Section>
      <a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default">
        <Card>
          <img src={Icon1} className="icon" alt="feature icon" />
          <div className="text">匿名倾诉</div>
        </Card>
      </a>
      <Link to="/mentors">
        <Card>
          <img src={Icon2} className="icon" alt="feature icon" />
          <div className="text">和TA语音</div>
        </Card>
      </Link>
      <Link to="/training">
        <Card>
          <img src={Icon3} className="icon" alt="feature icon" />
          <div className="text">人生解压舱</div>
        </Card>
      </Link>
    </Section>
  );
}
export default React.memo(Features);
