import styled from "styled-components";
import style from "../../global-style";
export const Section = styled.div`
  text-align: center;
  padding: 10rem 15rem;

  .title {
    padding-top: 10rem;
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
    color: ${style["font-color-dark"]};
  }
  .description {
    &--1,
    &--2,
    &--3 {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-s"]};
      margin-bottom: 3rem;
    }
    &--2 {
      color: ${style["font-color-light-1"]};
      padding: 5rem 15rem;
    }
    &--1 {
      color: ${style["font-color-light-2"]};
    }
    &--3 {
      color: ${style["font-color-dark"]};
    }
  }
  .video {
    width: 65vw;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .credentials {
    width: 100%;
    margin-bottom: 5rem;
    &__icon {
      width: 100%;
    }
  }
`;
export const Gallery = styled.div`
  display: grid;
  grid-column: full-start/full-end;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 20vw);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  width: 100%;
  margin-bottom: 5rem;

  position: relative;
  color: ${style["font-color-light-1"]};
  .icon {
    cursor: pointer;
    position: ${(props) => (props.expandAll ? "relative" : "absolute")};
    width: 100%;
    bottom: 0;
    right: 0;
    grid-column: 1/4;
    /* z-index: 1; */
    /* background: red; */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.9)
    );
    path {
      fill: ${(props) =>
        props.expandAll ? style["highlight-color"] : "#ffffff"};
    }
    :hover {
      path {
        fill: ${style["highlight-color"]};
      }
    }
  }
  .image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .text {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-ll"]};
    padding: 4rem;
  }
  .item {
    &--1 {
      grid-row: 1 / span 2;
      grid-column: 1/2;
    }
    &--2 {
      grid-row: 1 / 2;
      grid-column: 2 / span 2;
    }
    &--3 {
      grid-row: 2 / 3;
      grid-column: 2/3;
      display: flex;
      align-items: center;
    }
    &--4 {
      grid-row: 2 / span 2;
      grid-column: 3/4;
    }
    &--5 {
      grid-row: 3 / 4;
      grid-column: 1/2;
    }
    &--6 {
      grid-row: 3 / 4;
      grid-column: 2/3;
    }
    &--7 {
    }
    &--8 {
    }
    &--9 {
      padding: 4rem;
      display: flex;
      align-items: center;
    }
    &--10 {
      display: ${(props) => (props.expandAll ? "block" : "none")};
    }
    &--11 {
      display: ${(props) => (props.expandAll ? "block" : "none")};
    }
    &--12 {
      display: ${(props) => (props.expandAll ? "block" : "none")};
    }
  }
`;
