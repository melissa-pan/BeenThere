import React, { useState, useEffect } from "react";
import BuddyDetail from "../../components/BuddyDetail";

import { CSSTransition } from "react-transition-group";
import {
  SearchAllButton,
  SearchCallButton,
  SearchBar,
  Container,
  HeaderContainer,
} from "./style";
import { fetchedData } from "../../redux/index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { isEmptyObject } from "../../../utils/utils";

function Mentors(props) {
  const arrowIcon = (
    <svg
      t="1595034698857"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2409"
      width="48"
      height="48"
    >
      <path
        d="M640 674.133333l-166.4-166.4L640 341.333333a41.258667 41.258667 0 0 0 0-59.733333 41.258667 41.258667 0 0 0-59.733333 0l-196.266667 196.266667a41.258667 41.258667 0 0 0 0 59.733333l196.266667 196.266667A42.24 42.24 0 1 0 640 674.133333z"
        p-id="2410"
        fill="#a5a5a5"
      ></path>
    </svg>
  );
  const { history } = props;
  const { buddies } = props;
  const { fetchedData } = props;
  const [showCalling, setShowCalling] = useState(false);
  const [showStatus, setShowStatus] = useState(true);

  useEffect(() => {
    fetchedData();

    return () => {
      fetchedData();
    };
  }, []);
  const handleShowCall = () => {
    setShowCalling(true);
  };
  const handleShowAll = () => {
    setShowCalling(false);
  };
  const handleReturn = () => {
    setShowStatus(false);
  };
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  const enterDetail = (id) => {
    history.push(`/mentors/${id}`);
  };
  const changeColor = (id) => {
    if (id % 3 === 2) {
      return {
        background: "#EBf2FF",
        hoverBackground: "#dbe3ff",
        color: "#86A2FF",
      };
    } else if (id % 3 === 0) {
      return {
        background: "#f0f0ff",
        hoverBackground: "#dedeff",
        color: "#9c9cff",
      };
    }
    return;
  };
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        {/* <Header>{}选择你的专属Buddy</Header> */}

        <HeaderContainer onClick={handleReturn}>
          {arrowIcon} <span>选择你的专属Buddy</span>
        </HeaderContainer>
        <div className="text">
          点击头像查看 buddy 的故事，预约和TA语音/视频交流
        </div>
        <div className="donate">
          *你在BeenThere购买的所有服务，都会有5%捐献给XX慈善组织
        </div>

        <SearchBar>
          <div className="button">
            <SearchAllButton onClick={handleShowAll} changeStyle={showCalling}>
              全部
            </SearchAllButton>
          </div>
          <div className="button">
            <SearchCallButton
              onClick={handleShowCall}
              changeStyle={showCalling}
            >
              可语音
            </SearchCallButton>
          </div>{" "}
          {/* <div className="input-box">
          <i className="icon">addddddd</i>
          <input
            text="text"
            className="input"
            placeholder="搜索 Buddy"
            value={input}
            onChange={handleChange}
          />
        </div> */}
        </SearchBar>
        <div className="buddy-record">
          {!isEmptyObject(buddies) ? (
            showCalling ? (
              buddies
                .filter((item) => item.service === true)
                .map(
                  ({ id, name, info, desc, region, tag, service, avatar }) => (
                    <div
                      key={id}
                      onClick={() => enterDetail(id)}
                      style={{ justifySelf: "center" }}
                    >
                      <BuddyDetail
                        colorChange={changeColor(id)}
                        name={name}
                        info={info}
                        desc={desc}
                        region={region}
                        tag={tag}
                        service={service}
                        id={id}
                        avatar={avatar}
                      />
                    </div>
                  )
                )
            ) : (
              buddies.map(
                ({ id, name, info, desc, region, tag, service, avatar }) => (
                  <div
                    key={id}
                    onClick={() => enterDetail(id)}
                    style={{ justifySelf: "center" }}
                  >
                    <BuddyDetail
                      colorChange={changeColor(id)}
                      name={name}
                      info={info}
                      desc={desc}
                      region={region}
                      tag={tag}
                      service={service}
                      id={id}
                      avatar={avatar}
                    />
                  </div>
                )
              )
            )
          ) : (
            <p>Loading buddy profiles</p>
          )}
        </div>
      </Container>
    </CSSTransition>
  );
}
const mapStateToProps = (state) => ({
  buddies: state.buddies.buddies,
});
const mapDispatchToProps = {
  fetchedData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(withRouter(Mentors)));
