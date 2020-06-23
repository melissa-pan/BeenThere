import React, { useState, useEffect } from "react";
import styled from "styled-components";
import style from "../global-style";
import "swiper/css/swiper.css";
import Swiper from "swiper";
const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10rem;

  .introduction {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 5rem;
    padding-top: 0;
    &__group {
      position: relative;
      padding: 3rem;
    }
    &__detail {
      width: 12rem;
      height: 12rem;
      margin-bottom: 1rem;
      border-radius: 50%;
      color: ${style["highlight-color"]};
      border: 3px solid ${style["highlight-color"]};
      position: relative;
    }
    &__count {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${style["font-size-ll"]};
    }
    &__text {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1rem;
      color: ${style["font-color-light-2"]};
    }
    &__description {
      width: 14rem;
      position: absolute;
      bottom: 0;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light-1"]};
    }
  }
`;
const SliderContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 7rem;
  margin: auto;
  border-radius: 3rem;
  /* background: white; */
  background-color: ${style["theme-color-primary"]};

  &::before {
    content: open-quote;
    position: absolute;
    top: 3rem;
    left: -4rem;
    line-height: 1;
    font-size: 20rem;
    color: ${style["highlight-color"]};
    z-index: 1;
    @media (max-width: 37.5em) {
      font-size: 15rem;
    }
  }

  .slider-container {
    position: relative;
    width: 100%;
    height: 20rem;
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
      padding-top: 2rem;
    }
    .swiper-pagination-bullet-active {
      border: 1px solid ${style["highlight-color"]};
      background-color: ${style["highlight-color"]};
    }
  }
  .story {
    &__text {
      line-height: ${style["line-height-l"]};
      font-size: ${style["font-size-l"]};
      margin-bottom: 4rem;
    }
    &__user {
      width: 50%;
      margin-left: 50%;
      font-size: ${style["font-size-s"]};
      display: grid;
      grid-template-columns: 1fr max-content;
      align-items: center;
      grid-column-gap: 1.5rem;
      &::before {
        content: "";
        height: 1px;
        display: block;
        background-color: currentColor;
      }
    }
  }
`;
const commentList = [1, 2, 3, 4].map((item) => ({
  text:
    "她总是舍身出地的为我着想，这段漫长的失恋期是她告诉我不要埋怨自己，要selfcare，听我慢慢的讲述自己变化和改善，让我感受到一个来自陌生人的善意和世界的谅解。",
  user: "来访者经历",
}));
function Introduction() {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    if (commentList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [commentList.length, sliderSwiper]);
  return (
    <Section>
      <SliderContainer>
        <div className="slider-container">
          <div className=" swiper-wrapper">
            {commentList.map((comment, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav story">
                    <p className="story__text">{comment.text}</p>
                    <p className="story__user">{comment.user}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </SliderContainer>
      <div className="introduction">
        <div className="introduction__group">
          <div className="introduction__detail">
            <span className="introduction__count">3000+</span>
            <span className="introduction__text">咨询案例</span>
          </div>
          <div className="introduction__description">
            BeenThere 所有咨询案例超过 3000 个
          </div>
        </div>
        <div className="introduction__group">
          <div className="introduction__detail">
            <span className="introduction__count">96%</span>
            <span className="introduction__text">表示满意</span>
          </div>
          <div className="introduction__description">
            96% 的来访者对 Buddy 服务表示满意
          </div>
        </div>
        <div className="introduction__group">
          <div className="introduction__detail">
            <span className="introduction__count">87%</span>
            <span className="introduction__text">带来提升</span>
          </div>
          <div className="introduction__description">
            87% 的来访者表示我们的服务为 TA 带来提升
          </div>
        </div>
        <div className="introduction__group">
          <div className="introduction__detail">
            <span className="introduction__count">91%</span>
            <span className="introduction__text">愿意推荐</span>
          </div>
          <div className="introduction__description">
            91% 的来访者愿意将 BeenThere 推荐给他人
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Introduction;
