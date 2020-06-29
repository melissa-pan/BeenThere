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
  .background-vector {
    position: absolute;
    top: 75%;
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
export const CardDescription = styled(Description)`
  margin: 5rem 6rem;
`;
export const Card = styled.div`
  border-radius: 30px;
  display: flex;
  width: 100%;
  height: 12vw;
  overflow: hidden;
  transition: all 0.3s;
  &:hover {
    flex: 5;
  }
  .card-img {
    flex: 0 0 35%;
    height: 30vw;
    border-right: 3px solid rgba(255, 255, 255, 0.2);

    position: relative;
    padding: 4rem;
    img {
      position: absolute;

      width: 80%;
      height: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const Cards = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
  flex-direction: column;
  flex: 1;
  .card {
    &--1 {
      background-color: rgba(115, 91, 123, 0.8);
    }
    &--2 {
      background-color: rgba(93, 91, 123, 0.8);
    }
    &--3 {
      background-color: rgba(91, 115, 123, 0.8);
    }
  }
`;
