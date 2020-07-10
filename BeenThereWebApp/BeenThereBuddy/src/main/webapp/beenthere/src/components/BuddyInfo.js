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
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }
  .title {
    color: ${style["font-color-dark"]};
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
  }
  .description {
    color: ${style["font-color-light-2"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-l"]};
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
    font-size: ${style["font-size-l"]};
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
  const { history } = props;

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
      <div className="title">谁是你的聆听者</div>
      <div className="description">
        这里有身经百战的学霸，有善解人意的同伴，有解决问题的能手，
        <br />
        也有陪你开脑洞的过来人。我们在这里相遇，是因为经历过，所以懂。
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
