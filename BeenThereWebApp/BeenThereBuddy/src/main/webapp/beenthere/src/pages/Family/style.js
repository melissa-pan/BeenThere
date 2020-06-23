import styled from "styled-components";
import style from "../../global-style";
export const Section = styled.div`
  text-align: center;
  padding: 10rem 15rem;
  text-align: center;
  .title {
    padding-top: 10rem;
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
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
      padding: 5rem 15rem;
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
  grid-template-rows: repeat(5, 20vw);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  width: 100%;
  margin-bottom: 5rem;
  .gallery {
    &__image {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    &__text {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-ll"]};
      padding: 4rem;
    }
    &__item {
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
      }
      &--11 {
      }
      &--12 {
      }
    }
  }
`;
