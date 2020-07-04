import styled from "styled-components";

import style from "../../global-style";

export const Container = styled.div`
  padding: 15rem 5rem;
  text-align: center;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
  }
  .description {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-s"]};
    margin-bottom: 2rem;
    .donate {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
    }
  }

  .buddy-record {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 3rem 10rem;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  font-size: ${style["font-size-m"]};
  color: ${style["font-color-light-2"]};
  .input-box {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: end;
    color: inherit;
  }
  .icon {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    background-color: red;
  }
  .input {
    border: none;
    border-bottom: 1px solid ${style["font-color-light-2"]};
    font-size: inherit;
    padding: 0.7rem;
    margin-left: 2rem;
    color: inherit;
    &:focus {
      outline: none;
      width: 100%;
    }
  }
`;

export const SearchButton = styled.button`
  border: none;
  font-size: inherit;
  padding: 1.2rem 3.5rem;
  border-radius: 10rem;
  margin-right: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const SearchAllButton = styled(SearchButton)`
  background-color: ${(props) =>
    props.changeStyle ? `transparent` : `${style["theme-color-primary"]}`};
  color: ${(props) =>
    props.changeStyle
      ? `${style["font-color-light-2"]}`
      : `${style["highlight-color"]}`};
`;
export const SearchCallButton = styled(SearchButton)`
  background-color: ${(props) =>
    props.changeStyle ? `${style["theme-color-primary"]}` : `transparent`};
  color: ${(props) =>
    props.changeStyle
      ? `${style["highlight-color"]}`
      : `${style["font-color-light-2"]}`};
`;
