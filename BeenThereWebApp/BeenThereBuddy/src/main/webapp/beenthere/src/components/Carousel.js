import React, { useEffect, useState } from "react";
import styled from "styled-components";
import style from "../global-style";
import Image from "../img/Ellipse_7.png";
import Swiper from "swiper";
import { withRouter, Link } from "react-router-dom";
const Section = styled.div`
  color: #fff2de;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 30px;
  margin: 2rem;
  padding: 2rem;
  height: 30rem;
  width: 40vw;
  background-color: rgba(115, 91, 123, 0.8);
  .userinfo {
    display: flex;
    width: 100%;
    margin-bottom: 4rem;
  }
  .image {
    width: 16rem;
    height: 16rem;
    /* margin-left: 1rem; */
    display: flex;
    align-items: center;
    position: relative;
    /* margin-right: 2rem; */
    img {
      width: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @media (max-width: 56.25em) {
      width: 12rem;
      height: 12rem;
    }
    @media (max-width: 37.5em) {
      flex-direction: column;
      width: 4rem;
      height: 4rem;
    }
  }
  .detail {
    padding: 0 2rem;
    text-align: left;
    line-height: ${style["line-height-l"]};
    font-size: ${style["font-size-m"]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: ${style["font-size-l"]};
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
  .more {
    font-size: ${style["font-size-m"]};
    position: relative;

    width: 100%;
    span {
      display: block;
      padding: 0 6rem;
      line-height: ${style["line-height-l"]};
    }
    &::before {
      content: open-quote;
      position: absolute;
      top: -3rem;
      left: 2rem;
      line-height: 1;
      font-size: 10rem;
      color: ${style["highlight-color"]};
      z-index: 1;
      @media (max-width: 37.5em) {
        font-size: 15rem;
      }
    }
  }
`;

const buddy = [1, 2, 3].map((item, index) => ({
  id: index,
  name: "Hi! 我是Lexi",
  school: "#哈佛教育学院发展心理学硕士（在读）",
  info: "#投身教育的国家二级心理咨询师姐姐",
  location: "#坐标：美国东部",
}));
const enterDetail = (item) => {
  console.log(item.id, "mentors");
};
function BuddyDetail(props) {
  const { name, info, location, school } = props;
  // const { handleClick } = props;
  return (
    <Section>
      <div className="userinfo">
        <div className="image">
          <img src={Image} alt="buddy image" />
        </div>
        <div className="detail">
          <div className="name">{name}</div>
          <div className="school">{school}</div>
          <div className="info">{info}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="more">
        <span>不管是风里雨里还是波士顿的大雪里</span>{" "}
        <span>我在BeenThere等你 ❤</span>
      </div>
    </Section>
  );
}
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  padding: 7rem;
  .swiper-button-next,
  .swiper-button-prev {
    color: ${style["color-yellow-3"]};
  }
  .slider-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: auto;
  }
  .slider-nav {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;

    display: flex;

    justify-content: center;

    align-items: center;
    transition: all 0.3s;
  }
`;

function Carousel(props) {
  const { history, route } = props;
  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    if (buddy.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,

        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [buddy.length, sliderSwiper]);
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  return (
    <div>
      <SliderContainer>
        <div className="slider-container">
          <div className=" swiper-wrapper">
            {buddy.map((item, index) => {
              return (
                <div
                  className="swiper-slide"
                  key={index}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  <BuddyDetail
                    background=""
                    image=""
                    school={item.school}
                    name={item.name}
                    info={item.info}
                    location={item.location}
                    key={item.id}
                    className="slider-nav"
                  />
                </div>
              );
            })}
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </SliderContainer>
    </div>
  );
}
export default React.memo(withRouter(Carousel));
