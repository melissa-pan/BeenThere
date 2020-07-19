import React, { useState, useEffect } from "react";
import BuddyDetail from "../../components/BuddyDetail";
import {
  SearchAllButton,
  SearchCallButton,
  SearchBar,
  Container,
} from "./style";
import { fetchedData } from "../../redux/index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { isEmptyObject } from "../../../utils/utils";

function Mentors(props) {
  const { history } = props;
  const { buddies } = props;
  const { fetchedData } = props;
  const [showCalling, setShowCalling] = useState(false);

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
    <Container>
      <div className="title">选择你的专属Buddy</div>
      <div className="description">
        <p>点击头像查看 buddy 的故事，预约和TA语音/视频交流</p>

        <p className="donate">
          *你在BeenThere购买的所有服务，都会有5%捐献给XX慈善组织
        </p>
      </div>
      {/* <button className="button" href="#">
        查看 Buddy 值班日历 >
      </button>  */}
      <SearchBar>
        <SearchCallButton onClick={handleShowCall} changeStyle={showCalling}>
          可语音的 Buddy
        </SearchCallButton>
        <SearchAllButton onClick={handleShowAll} changeStyle={showCalling}>
          全部 Buddy
        </SearchAllButton>
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
              .filter((item) => item.service === "ready")
              .map(({ id, name, info, desc, region, tag, service, avatar }) => (
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
              ))
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
      {showCalling ? (
        <div className="text">
          还有更多Buddy 即将上线语音/视频服务，敬请期待!
        </div>
      ) : (
        <div className="text">还有更多Buddy 个人简介，小包正在努力搭建!</div>
      )}
    </Container>
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
