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
`;
export const Section = styled.div`
  position: relative;
  text-align: center;
  .background-vector {
    position: absolute;
    top: 75%;
    right: 0;
    width: 40vw;
    z-index: 0;
  }
  .button {
    border: none;

    color: ${style["color-yellow-3"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["color-yellow-3"]};
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 10rem;
  padding-top: 5rem;
  position: relative;
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
  .title {
    color: ${style["color-yellow-3"]};
    font-size: ${style["font-size-ll"]};
    margin-bottom: 4rem;
    &--center {
      margin-top: 10rem;
      text-align: center;
    }
    &--2 {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-l"]};
    }
    span {
      display: block;
      line-height: ${style["line-height-ll"]};
    }
  }

  .content {
    color: ${style["theme-color-primary"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-m"]};
    margin-bottom: 4rem;
    &--2 {
      font-size: ${style["font-size-m"]};
    }
    &--center {
      text-align: center;
      padding-bottom: 5rem;
      margin-bottom: 0;
    }
    span {
      display: block;
      line-height: ${style["line-height-m"]};
    }
  }
`;
