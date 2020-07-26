import styled from "styled-components";

import style from "../../global-style";

export const Container = styled.div`
  padding: 10rem 20rem;
  /* text-align: center; */
  .sub {
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-ll"]};
    margin-bottom: 30px;
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
