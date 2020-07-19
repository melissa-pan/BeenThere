import styled from "styled-components";
import style from "../../global-style";
export const QRcode = styled.div`
  position: relative;
  width: 30vw;
  .qrcode {
    width: 100%;
    z-index: 1;
    position: absolute;
    width: 20vw;
    left: 8rem;
    bottom: 5rem;
    img {
      width: 100%;
    }
  }
  .training-vector {
    width: 100%;
    z-index: 0;
    position: absolute;
    width: 13vw;
    height: 23vw;
    right: -10rem;
    bottom: 6rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .training-vector--2 {
    width: 100%;
    width: 31rem;
    height: 30rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const Section = styled.div`
  position: relative;
  padding-bottom: 50px;
  .text {
    color: ${style["theme-color-primary"]};
    font-size: ${style["font-size-l"]};
    text-align: center;
    line-height: ${style["line-height-ll"]};
  }
  .background-vector {
    position: absolute;
    top: 80%;
    right: 0;
    width: 40vw;
    z-index: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 10rem;
  padding-top: 5rem;
  position: relative;
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }

  .photo {
    z-index: 1;
    &--1 {
      width: 30vw;
      /* padding-top: 6rem; */
    }
    &--2 {
      width: 40vw;
      /* margin: 0 2rem; */
    }

    img {
      width: 100%;
    }
  }
`;
export const Description = styled.div`
  margin: auto 3rem;
  text-align: left;
  width: 35%;
  padding-left: 40px;

  @media (max-width: 56.25em) {
    padding-left: 0;
  }

  .title {
    color: ${style["color-yellow-3"]};
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 4rem;
    &--sub {
      font-size: ${style["font-size-m"]};
    }
    &--2 {
      font-size: ${style["font-size-l"]};
      letter-spacing: 0.07em;
    }
  }

  .content {
    color: ${style["theme-color-primary"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-ll"]};

    margin-bottom: 4rem;
    &--2 {
      font-size: ${style["font-size-m"]};
    }
    .appointment {
      color: ${style["highlight-color"]};
    }
  }
`;
