import React from "react";
import BuddyDetail from "./BuddyDetail";
import style from "../global-style";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
// import {  } from "react-router-dom";
// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  text-align: center;
  padding: 5rem;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
  }
  .description {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-s"]};
    margin-bottom: 2rem;
  }
  .buddy-record {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 3rem 10rem;
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
function BuddyInfo(props) {
  const { history, route } = props;
  // console.log(route);
  const buddy = [1, 2, 3, 4].map((item, index) => ({
    id: index,
    name: "lexi",
    info: "哈佛教育学院发展心理学硕士（在读）投身教育的国家二级心理咨询师姐姐",
    location: "坐标：美国东部",
  }));
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  return (
    <Section>
      <div className="title">BeenThere Buddy</div>
      <div className="description">
        <p>
          目前我们有 100 余位Online Buddy, TA 们是来自世界各地名校的活跃志愿者
        </p>
        <p>来自哈佛、麻省理工、斯坦福、伯克利、清华、北大、复旦等海内外名校</p>
      </div>
      <div className="buddy-record">
        {buddy.map(({ id, name, info, location }) => (
          <div
            key={id}
            onClick={() => {
              handleClick(id);
            }}
          >
            <BuddyDetail
              background=""
              image=""
              name={name}
              info={info}
              location={location}
              key={id}
              // handleClick={() => handleClick(id)}
            />
          </div>
        ))}
      </div>
      <Link to="/mentors">
        <button className="button">查看更多 ></button>
      </Link>
      {/* {renderRoutes(route.routes)} */}
    </Section>
  );
}
export default React.memo(withRouter(BuddyInfo));
