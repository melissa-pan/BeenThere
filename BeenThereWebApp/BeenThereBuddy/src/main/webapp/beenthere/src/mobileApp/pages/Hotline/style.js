import styled from "styled-components";
import style from "../../global-style";
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  .image {
    margin: 70px 30px 30px 30px;
    /* margin-top: 70px; */
    width: 320px;

    height: 205px;
  }
`;
export const Section = styled.div`
  padding-top: 30px;
  display: ${(props) => (props.showStatus ? "block" : "none")};
`;
export const Content = styled.div`
  width: 85vw;
  margin: 0 auto;
  .section {
    padding-top: 30px;
  }
  .link {
    color: #9c9cff;
    font-weight: bold;
  }
  .title {
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-ll"]};
    /* letter-spacing: 0.07rem; */
    font-weight: bold;
    margin-bottom: 5px;
  }
  .description {
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-l"]};
    /* width: 60%; */

    &--bold {
      margin-top: 5px;
      display: inline-block;
      font-size: ${style["font-size-m"]};
      font-weight: bold;
    }
  }
`;
export const NavContainer = styled.div`
  box-sizing: border-box;
  /* position: fixed; */
  /* top: 95px;  */
  width: 100%;
  padding-left: 30px;
  overflow: hidden;
`;
export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: ${style["line-height-m"]};
  color: ${style["font-color-light-1"]};
  background-color: ${style["background-color-white"]};
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
    flex: 0 0 75%;
    letter-spacing: 0.02em;
  }
`;
