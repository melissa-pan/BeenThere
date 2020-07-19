import React, { useEffect, useState } from "react";
import BuddyDetail from "../../../components/BuddyDetail";
import style from "../../../global-style";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { fetchedData } from "../../../redux/index";
import { connect } from "react-redux";
import Swiper from "swiper";
import "swiper/css/swiper.css";

const Description = styled.div`
  letter-spacing: 0;
  text-align: left;
  width: 340px;
  height: 170px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${style["font-color-light-1"]};
  .title {
    letter-spacing: inherit;
    margin-bottom: 10px;
    text-align: inherit;
    font-size: ${style["font-size-ls"]};
    line-height: ${style["line-height-ll"]};
    color: ${style["font-color-light-1"]};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sub {
    font-size: ${style["font-size-s"]};
    line-height: ${style["line-height-ll"]};

    color: ${style["font-color-light-2"]};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const SliderContainer = styled.div`
  position: relative;

  width: 300px;
  height: 205px;
  padding: 45px;
  margin: auto;
  border-radius: 15px;
  text-align: left;
  color: ${style["font-color-light-2"]};
  /* background: white; */
  background-color: ${style["theme-color-primary"]};

  .slider-container {
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
    margin: auto;
    /* border-radius: 6px; */
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination {
      padding-top: 20px;
    }
    .swiper-pagination-bullet-active {
      border: 1px solid ${style["highlight-color"]};
      background-color: ${style["highlight-color"]};
    }
  }
  .story {
    &__buddy {
      font-size: ${style["font-size-s"]};
      margin-bottom: 5px;
      font-weight: bold;
    }
    &__text {
      line-height: ${style["line-height-s"]};
      font-size: ${style["font-size-s"]};
      margin-bottom: 5px;
      /* width: 100%; */
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

  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    if (buddies.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination", clickable: true },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [sliderSwiper]);

  const { history } = props;

  const { buddies } = props;
  const { fetchedData } = props;

  const handleClick = (id) => {
    history.push(`/mentors/${id}`);
  };
  const changeColor = (id) => {
    if (id % 3 === 2) {
      return {
        background: "#EBf2FF",
        hoverBackground: "#dbe3ff",
        color: "#86A2FF",
      };
    } else if (id % 3 === 0) {
      return {
        background: "#f0f0ff",
        hoverBackground: "#dedeff",
        color: "#9c9cff",
      };
    }
    return;
  };
  const arrowIcon = (
    <svg
      t="1595027406481"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2082"
      width="40"
      height="40"
    >
      <path
        d="M384 349.866667l166.4 166.4L384 682.666667a41.258667 41.258667 0 0 0 0 59.733333 41.258667 41.258667 0 0 0 59.733333 0l196.266667-196.266667a41.258667 41.258667 0 0 0 0-59.733333l-196.266667-196.266667A42.24 42.24 0 1 0 384 349.866667z"
        p-id="2083"
        fill="#a5a5a5"
      ></path>
    </svg>
  );
  return (
    <Section>
      <Description>
        <Link to="/mentors">
          <div className="title">
            谁是你的聆听者 <span className="title--icon">{arrowIcon}</span>
          </div>
          <div className="sub">
            这里有亲历过烦恼的同伴，有善解人意的过来人，
            有身经百战的学霸，也有乘风破浪的职场人。
            我们在这里相聚，是因为经历过，所以懂。
          </div>
        </Link>
      </Description>

      {buddies
        .filter((item, index) => index < 4)
        .map(({ id, name, info, desc, region, tag, avatar }) => {
          return (
            <div
              key={id}
              onClick={() => {
                handleClick(id);
              }}
            >
              <BuddyDetail
                colorChange={changeColor(id)}
                name={name}
                info={info}
                desc={desc}
                region={region}
                tag={tag}
                id={id}
                avatar={avatar}
              />
            </div>
          );
        })}
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
