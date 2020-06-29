import React from "react";
import styled from "styled-components";
import style from "../global-style";
const Section = styled.button`
  border: none;
  background-color: ${(props) =>
    props.background ? props.background : style["button-color"]};
  border-radius: 100px;
  padding: 1.5rem 6.7rem;
  width: 100%;
  font-size: ${style["font-size-l"]};
  color: ${(props) => (props.fontColor ? props.fontColor : "inherit")};
  letter-spacing: 0.08rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) =>
      props.hoverBackground ? props.hoverBackground : style["highlight-color"]};
  }
`;
function Button(props) {
  // console.log()
  return (
    <Section
      background={props.background}
      fontColor={props.fontColor}
      hoverBackground={props.hoverBackground}
    >
      {props.children}
    </Section>
  );
}
export default React.memo(Button);
