import styled from "styled-components";

import style from "../../global-style";
export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${style["line-height-m"]};
  color: ${style["font-color-light-1"]};
  background-color: ${style["background-color-white"]};
  z-index: 100;
  margin: 0;
  font-size: ${style["font-size-l"]};
  font-weight: bold;
  text-align: center;
`;

export const Container = styled.div`
  /* text-align: center; */
  .sub {
    padding-top: 70px;
    margin: 0 30px;
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-ll"]};

    &--highlight {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
  }
  .part {
    margin-bottom: 10px;
    &--title {
      font-weight: bold;
    }
  }
`;
