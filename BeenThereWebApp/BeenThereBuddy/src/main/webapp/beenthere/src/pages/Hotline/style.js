import styled from "styled-components";
import style from "../../global-style";
export const Container = styled.div`
  padding-top: 10rem;
  /* font-size: 10rem; */
  z-index: 100;
  display: flex;
  color: ${style["font-color-light-1"]};
`;
export const SideBar = styled.nav`
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  li {
    list-style: none;
    padding: 2rem 0;
  }
  a {
    /* cursor: pointer; */
    text-decoration: none;
    color: ${style["font-color-light-1"]};
    font-size: ${style["font-size-m"]};
    &:hover {
      color: ${style["highlight-color"]};
    }
    &.selected {
      color: ${style["highlight-color"]};
    }
  }
`;
export const Content = styled.div`
  .section {
    padding-top: 7rem;
  }
  .link {
    color: #9c9cff;
    font-weight: bold;
  }
  .title {
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-ll"]};
    letter-spacing: 0.07rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .description {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-ll"]};
    width: 60%;

    &--bold {
      /* margin-top: 2rem; */
      display: inline-block;
      font-weight: bold;
    }
  }
`;
