import styled from "styled-components";
import style from "../../global-style";
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 20px;
  width: 55%;
  margin: 0 auto;
  color: ${style["font-color-light-2"]};
  font-size: ${style["font-size-l"]};
  line-height: ${style["line-height-l"]};
  .highlight {
    color: ${style["highlight-color"]};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  padding-top: 15rem;
  position: relative;
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }
  .description {
    padding-left: 5rem;
    margin: auto 2rem;
    &__title {
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      color: ${style["font-color-dark"]};
      span {
        display: block;
        line-height: ${style["line-height-l"]};
      }
    }
    &__sub {
      font-size: ${style["font-size-l"]};

      margin-bottom: 3rem;
      color: ${style["font-color-light-2"]};
      span {
        display: block;
        line-height: ${style["line-height-l"]};
      }
    }
  }
  .photo {
    z-index: 1;
    &--1 {
      margin: 0 2rem;
      width: 36%;
    }
    &--2 {
      padding-right: 5rem;
      width: 40%;
    }
    &--3 {
      margin: 0 2rem;
      width: 40%;
    }
    img {
      width: 100%;
    }
  }
  .background-vector {
    position: absolute;

    &--1 {
      transform: rotate(-4.4deg);
      right: -2rem;
      top: -4rem;
      width: 50%;
    }
    &--2 {
      left: -5rem;
      top: -5rem;
      width: 40%;
      height: 100%;
    }
    &--3 {
      right: -6rem;
      top: 1rem;
      width: 40%;
      height: 100%;
      transform: rotate(-180deg) rotateX(-180deg)
        matrix(-0.97, -0.23, -0.23, 0.97, 0, 0);
    }
  }
`;
