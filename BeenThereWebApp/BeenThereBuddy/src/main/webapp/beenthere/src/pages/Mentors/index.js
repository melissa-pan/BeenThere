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
import { isEmptyObject } from "../../utils/utils";
import avator1 from "../../img/avatars/1.png";
function Mentors(props) {
  const { history } = props;
  const { buddies } = props;
  const { fetchedData } = props;
  const [showCalling, setShowCalling] = useState(false);

  // const [input, setInput] = useState(undefined);

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
      <div className="title">BeenThere Buddy</div>
      <div className="description">
        <p>
          目前我们有 100 余位Online Buddy, TA 们是来自世界各地名校的活跃志愿者
        </p>
        <p>来自哈佛、麻省理工、斯坦福、伯克利、清华、北大、复旦等海内外名校</p>
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
              .filter((item) => item.service === true)
              .map(({ id, name, info, desc, region, tag, service }) => (
                <div key={id} onClick={() => enterDetail(id)}>
                  <BuddyDetail
                    colorChange={changeColor(id)}
                    avator={avator1}
                    name={name}
                    info={info}
                    desc={desc}
                    region={region}
                    tag={tag}
                    service={service}
                    id={id}
                  />
                </div>
              ))
          ) : (
            buddies.map(({ id, name, info, desc, region, tag, service }) => (
              <div key={id} onClick={() => enterDetail(id)}>
                <BuddyDetail
                  colorChange={changeColor(id)}
                  image=""
                  name={name}
                  info={info}
                  desc={desc}
                  region={region}
                  tag={tag}
                  service={service}
                  id={id}
                />
              </div>
            ))
          )
        ) : (
          <p>Loading buddy profiles</p>
        )}
      </div>
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
