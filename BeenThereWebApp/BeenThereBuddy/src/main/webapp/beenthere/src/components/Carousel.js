import React, { useEffect, useState } from "react";
import styled from "styled-components";
import style from "../global-style";
import { fetchedData } from "../redux/index";
import { connect } from "react-redux";
import BuddyDetail from "./BuddyDetail";
import Swiper from "swiper";
import { withRouter } from "react-router-dom";
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

// function BuddyDetail(props) {
//   const { name, info, location, school } = props;
//   // const { handleClick } = props;
//   return (
//     <Section>
//       <div className="userinfo">
//         <div className="image">
//           <img src={Image} alt="buddy image" />
//         </div>
//         <div className="detail">
//           <div className="name">{name}</div>
//           <div className="school">{school}</div>
//           <div className="info">{info}</div>
//           <div className="location">{location}</div>
//         </div>
//       </div>
//       <div className="more">
//         <span>不管是风里雨里还是波士顿的大雪里</span>{" "}
//         <span>我在BeenThere等你 ❤</span>
//       </div>
//     </Section>
//   );
// }
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
  const { history } = props;
  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    fetchedData();

    return () => {
      fetchedData();
    };
  }, []);
  const { buddies } = props;
  const { fetchedData } = props;
  useEffect(() => {
    if (buddies.length && !sliderSwiper) {
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
  }, [buddies.length, sliderSwiper]);
  const handleClick = (id) => {
    // console.log("clicked!");
    history.push(`/mentors/${id}`);
  };
  const changeColor = (id) => {
    if (id % 3 === 0) {
      return {
        background: "rgba(115, 91, 123, 0.8)",
        hoverBackground: "rgba(115, 91, 123, 0.8)",
        color: "#fff2de",
      };
    } else if (id % 3 === 1) {
      return {
        background: "rgba(91, 115, 123, 0.8)",
        hoverBackground: "rgba(91, 115, 123, 0.8)",
        color: "#fff2de",
      };
    }
    return {
      background: "rgba(93, 91, 123, 0.8)",
      hoverBackground: "rgba(93, 91, 123, 0.8)",
      color: "#fff2de",
    };
  };
  return (
    <div>
      <SliderContainer>
        <div className="slider-container">
          <div className=" swiper-wrapper">
            {buddies.map((item, index) => {
              return (
                <div
                  className="swiper-slide"
                  key={index}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  <BuddyDetail
                    colorChange={changeColor(item.id)}
                    name={item.name}
                    info={item.info}
                    desc={item.desc}
                    region={item.region}
                    tag={item.tag}
                    id={item.id}
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
const mapStateToProps = (state) => ({
  buddies: state.buddies.buddies,
});
const mapDispatchToProps = {
  fetchedData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(withRouter(Carousel)));
