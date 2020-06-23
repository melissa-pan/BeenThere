import React from "react";
import styled from "styled-components";
import style from "../global-style";
const Section = styled.button`
  border: none;
  background-color: ${style["button-color"]};
  border-radius: 100px;
  padding: 1.5rem 6.7rem;

  font-size: ${style["font-size-l"]};
  letter-spacing: 0.08rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${style["highlight-color"]};
  }
`;
function Button(props) {
  return <Section>{props.children}</Section>;
}
export default React.memo(Button);
