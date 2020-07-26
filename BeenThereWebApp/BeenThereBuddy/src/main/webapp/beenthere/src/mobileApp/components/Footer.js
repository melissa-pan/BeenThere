import React from "react";
import style from "../global-style";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Section = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  color: ${style["font-color-light-2"]};
  font-size: ${style["font-size-s"]};
  line-height: ${style["line-height-l"]};
  .highlight {
    color: ${style["highlight-color"]};
  }
  .copyright {
    color: ${(props) =>
      props.fontColor2 ? props.fontColor2 : style["font-color-light-2"]};
    border-top: 1px solid #f7f7f7;
    padding-top: 10px;
    text-align: center;

    font-size: 6px;
  }
`;
function Footer(props) {
  return (
    <Section>
      <div>
        BeenThere
        是一个互助倾听组织，不提供专业的心理咨询和医疗服务。如有需要，建议您接受相关专业服务，或是拨打我们为您搜集的免费专业的
        <Link to="/hotline" className="highlight">
          &nbsp;[心理支持服务热线]
        </Link>
        我们在意您的安全和健康，很希望帮到您!
      </div>

      <div className="copyright">
        <p>
          Designed By Yunjie Zhang, Mohan Pan, Heru Wang | Powered By Rui Cao,
          Jack Zhu, Zhiyang Pan, Haochen Yang
        </p>
        <p>
          Copyright &copy; 2019-2020 上海彼巷文化传媒有限公司 |
          联系方式：contact@beentherebuddy.com{" "}
        </p>
      </div>
    </Section>
  );
}
export default React.memo(Footer);
