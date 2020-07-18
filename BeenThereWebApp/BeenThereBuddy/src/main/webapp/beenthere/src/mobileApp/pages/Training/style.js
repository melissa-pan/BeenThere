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
  padding-bottom: 60px;
  .background-vector {
    position: absolute;
    top: 75%;
    right: 0;
    width: 40vw;
    z-index: 0;
  }
  .photo {
    z-index: 1;
    &--1 {
      width: 335px;
      height: 315px;
      margin: 0 auto;
      & > img {
        width: 100%;
      }
    }
  }
`;

export const Description = styled.div`
  margin: auto 15px;
  text-align: left;
  padding-left: 30px;
  .title {
    color: ${style["color-yellow-3"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-ll"]};
    margin-bottom: 20px;
    &--center {
      margin-top: 10px;
      text-align: center;
    }
    &--2 {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-l"]};
    }
  }

  .content {
    color: ${style["theme-color-primary"]};
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-m"]};
    margin-bottom: 20px;
    &--2 {
      font-size: ${style["font-size-m"]};
    }
    &--center {
      text-align: center;
      line-height: ${style["line-height-l"]};
      width: 310px;

      margin-bottom: 0;
    }
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  line-height: ${style["line-height-m"]};
  color: ${style["theme-color-primary"]};
  background-color: #030d16;
  z-index: 100;
  margin: 0;
  font-size: ${style["font-size-l"]};
  font-weight: bold;
  text-align: center;
  .icon {
    cursor: pointer;
  }
  & > span {
    text-align: center;
    flex: 0 0 72%;
    letter-spacing: 0.02em;
  }
`;
