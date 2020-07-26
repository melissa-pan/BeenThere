import React, { useState, useRef, useEffect, memo } from "react";
import styled from "styled-components";
import Scroll from "./Scroll";
import { PropTypes } from "prop-types";
import style from "../global-style";

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 15px 20px;
    margin-right: 5px;
    color: ${style["font-color-light-1"]};
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`;
const ListItem = styled.span`
  flex: 0 0 auto;
  color: ${style["font-color-light-1"]};
  font-size: ${style["font-size-m"]};
  padding: 10px 37px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  &.selected {
    color: ${style["highlight-color"]};
    border-bottom: 2px solid ${style["highlight-color"]};
    /* opacity: 0.8; */
  }
`;

function Horizen(props) {
  const { list, oldVal, title } = props;
  const { handleClick } = props;
  const Category = useRef(null);
  useEffect(() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;
    Array.from(tagElems).forEach((ele) => {
      totalWidth += ele.offsetWidth;
    });
    categoryDOM.style.width = `${totalWidth}px`;
  }, []);
  return (
    <Scroll direction={"horizental"}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.id}
                className={`${oldVal === item.id ? "selected" : ""}`}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
}

Horizen.defaultProps = {
  list: [],
  oldVal: "",
  title: "",
  handleClick: null,
};

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
};
export default memo(Horizen);
