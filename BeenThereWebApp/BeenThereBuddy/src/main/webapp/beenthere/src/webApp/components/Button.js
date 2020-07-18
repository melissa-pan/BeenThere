import React from "react";
import styled from "styled-components";
import style from "../global-style";
const Section = styled.button`
  border: none;
  background-color: ${(props) =>
    props.background ? props.background : style["button-color"]};
  cursor: pointer;
  border-radius: 100px;
  padding: 1.5rem;
  width: 100%;
  font-weight: bold;
  font-size: ${style["font-size-l"]};
  color: ${(props) =>
    props.fontColor ? props.fontColor : style["font-color-light-1"]};
  letter-spacing: 0.08rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) =>
      props.hoverBackground ? props.hoverBackground : style["highlight-color"]};
  }

  &:disabled {
    background-color: ${style["background-color-grey"]};
    color: ${style["font-color-light-2"]};
    cursor: auto;
  }
`;
function Button(props) {
  // console.log()
  const { children, disabled, ...rest } = props;
  return (
    <Section {...rest} disabled={disabled}>
      {children}
    </Section>
  );
}
export default React.memo(Button);
