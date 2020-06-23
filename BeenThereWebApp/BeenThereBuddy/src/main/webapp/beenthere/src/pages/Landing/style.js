import styled from "styled-components";
import style from "../../global-style";
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  padding-top: 15rem;
  position: relative;
  .description {
    padding-left: 5rem;
    margin: auto 2rem;
    &__title {
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      span {
        display: block;
        line-height: ${style["line-height-ll"]};
      }
    }
    &__sub {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-m"]};
      margin-bottom: 3rem;
      span {
        display: block;
        line-height: ${style["line-height-m"]};
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
      width: 45%;
    }
    &--3 {
      margin: 0 2rem;
      width: 45%;
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
      width: 50vw;
    }
    &--2 {
      left: -5rem;
      top: -8rem;
      width: 40vw;
      height: 60vw;
    }
    &--3 {
      right: -6rem;
      top: -1rem;
      width: 50vw;
      height: 60vw;
      transform: rotate(-180deg) rotateX(-180deg)
        matrix(-0.97, -0.23, -0.23, 0.97, 0, 0);
    }
  }
`;
