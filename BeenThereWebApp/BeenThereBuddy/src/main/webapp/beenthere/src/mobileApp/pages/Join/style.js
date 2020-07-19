import styled from "styled-components";
import style from "../../global-style";
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  .description {
    &__title {
      font-size: ${style["font-size-m"]};
      padding-bottom: 5px;
      color: ${style["highlight-color"]};
      font-weight: bold;
      border-bottom: 1px solid #f7f7f7;
      border-top: 1px solid #f7f7f7;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > span {
        /* text-align: center; */
        /* flex: 0 0 15%; */
        /* letter-spacing: 0.02em; */
        transform: ${(props) =>
          props.showDetail ? "rotate(90deg)" : "rotate(-90deg)"};
      }
    }
    &__sub {
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light-1"]};
      padding: 15px 0;
      display: ${(props) => (props.showDetail ? "block" : "none")};
      &--hightlight {
        font-weight: bold;
      }
    }
  }
  .button {
    display: ${(props) => (props.showDetail ? "block" : "none")};
  }
`;
export const Section = styled.div`
  /* padding: 15rem 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image {
    margin-top: 60px;
    width: 290px;
    height: 185px;
  }
  .description {
    width: 296px;
    font-size: ${style["font-size-s"]};
    line-height: ${style["line-height-ll"]};
    padding: 10px 0;
    color: ${style["font-color-light-1"]};
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
