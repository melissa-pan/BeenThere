import styled from "styled-components";

import style from "../../global-style";
import Button from "../../components/Button";
export const Container = styled.div`
  text-align: center;

  .text {
    font-size: ${style["font-size-sm"]};
    line-height: ${style["line-height-l"]};

    color: ${style["font-color-light-2"]};
    padding-top: 70px;
  }
  .donate {
    font-size: ${style["font-size-sm"]};
    color: ${style["highlight-color"]};
    font-weight: bold;
  }
  .button {
    width: 70px;
  }

  .buddy-record {
    display: flex;
    flex-direction: column;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  font-size: ${style["font-size-m"]};
  color: ${style["font-color-light-2"]};
`;
export const SearchButton = styled.button`
  border: none;
  font-size: ${style["font-size-s"]};
  padding: 5px 13px;
  border-radius: 10px;
  margin-right: 10px;
  width: 70px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const SearchAllButton = styled(SearchButton)`
  background-color: ${(props) =>
    props.changeStyle ? "#fff" : `${style["theme-color-primary"]}`};
  color: ${(props) =>
    props.changeStyle
      ? `${style["font-color-light-2"]}`
      : `${style["highlight-color"]}`};
  font-weight: ${(props) => (props.changeStyle ? "" : "bold")};
`;
export const SearchCallButton = styled(SearchButton)`
  background-color: ${(props) =>
    props.changeStyle ? `${style["theme-color-primary"]}` : "#fff"};
  color: ${(props) =>
    props.changeStyle
      ? `${style["highlight-color"]}`
      : `${style["font-color-light-2"]}`};
  font-weight: ${(props) => (props.changeStyle ? "bold" : "")};
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
    flex: 0 0 85%;
    letter-spacing: 0.02em;
  }
`;
