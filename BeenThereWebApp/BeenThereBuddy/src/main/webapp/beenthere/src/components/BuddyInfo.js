import React, { useEffect } from "react";
import BuddyDetail from "./BuddyDetail";
import style from "../global-style";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { fetchedData } from "../redux/index";
import { connect } from "react-redux";
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
  useEffect(() => {
    fetchedData();

    return () => {
      fetchedData();
    };
  }, []);
  const { history, route } = props;

  const { buddies } = props;
  const { fetchedData } = props;

  const handleClick = (id) => {
    history.push(`/mentors/${id}`);
  };
  const changeColor = (id) => {
    if (id === 2 || id === 3) {
      return {
        background: "#EBf2FF",
        hoverBackground: "#dbe3ff",
        color: "#86A2FF",
      };
    }
    return;
  };
  return (
    <Section>
      <div className="title">BeenThere Buddy</div>
      <div className="description">
        <p>
          目前我们有 100 余位Online Buddy, TA 们是来自世界各地名校的活跃志愿者
        </p>
        <p>来自哈佛、麻省理工、斯坦福、伯克利、清华、北大、复旦等海内外名校</p>

        <p className="donate">
          *你在BeenThere购买的所有服务，都会有5%捐献给慈善组织
        </p>
      </div>
      <div className="buddy-record">
        {buddies
          .filter((item, index) => index < 4)
          .map(({ id, name, info, desc, region, tag }) => (
            <div
              key={id}
              onClick={() => {
                handleClick(id);
              }}
            >
              <BuddyDetail
                colorChange={changeColor(id)}
                image=""
                name={name}
                info={info}
                desc={desc}
                region={region}
                tag={tag}
                id={id}
              />
            </div>
          ))}
      </div>
      <Link to="/mentors">
        <button className="button">查看更多 ></button>
      </Link>
    </Section>
  );
}
const mapStateToProps = (state) => ({
  buddies: state.buddies.buddies,
});
const mapDispatchToProps = {
  fetchedData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(withRouter(BuddyInfo)));
