import styled from "styled-components";
import style from "../../global-style";
export const Container = styled.div`
  display: flex;
  padding-top: 80px;
  flex-direction: column;
  width: 100%;
  transition: all 0.2s;
  .photo {
    width: 345px;
    height: 228px;
    margin: 0 auto;
  }
  .title {
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-m"]};
    letter-spacing: 0.65em;
    text-align: center;
    margin: 10px 0;
  }
`;
