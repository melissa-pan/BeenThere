import styled from "styled-components";
import style from "../../global-style";
export const QRcode = styled.div`
  position: relative;
  width: 370px;
  height: 290px;
  z-index: 0;
  .qrcode {
    width: 100%;
    z-index: 1;
    position: absolute;
    left: 80px;
    bottom: 50px;
    width: 180px;
  }
  .training-vector {
    width: 152px;
    z-index: 0;
    height: 213px;
    position: absolute;
    left: 240px;
    bottom: 50px;
  }
  .training-vector--2 {
    width: 275px;
    height: 275px;
    z-index: -1;
    position: absolute;
    left: 10%;
    bottom: 10%;
  }
`;
export const Container = styled.div``;
export const Section = styled.div`
  position: relative;
  text-align: center;

  .background-vector {
    position: absolute;
    top: 53%;
    right: 0;
    width: 40vw;
    z-index: 0;
  }
  .photo {
    z-index: 1;
    &--1 {
      width: 315px;
      height: 335px;
      margin: 0 auto;
      & > img {
        width: 100%;
      }
    }
  }
  .appointment {
    width: 100vw;
    background: rgba(249, 249, 249, 0.5);
    position: fixed;
    bottom: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.div`
  margin: 15px;
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
    & > a {
      line-height: ${style["line-height-l"]};
      color: ${style["highlight-color"]};
    }
    &--2 {
      font-size: ${style["font-size-m"]};
    }
    &--center {
      text-align: center;
      line-height: ${style["line-height-l"]};
      width: 310px;

      margin-bottom: 40px;
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
