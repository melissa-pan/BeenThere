import React, { useState } from "react";
import BuddyDetail from "../../components/BuddyDetail";
import {
  SearchAllButton,
  SearchCallButton,
  SearchBar,
  Container,
} from "./style";
function Mentors(props) {
  const { history } = props;
  const [showCalling, setShowCalling] = useState(false);
  // const [input, setInput] = useState(undefined);

  const buddy = [1, 2, 3, 4, 5, 6].map((item, index) => ({
    id: index,
    name: "lexi",
    info: "哈佛教育学院发展心理学硕士（在读）投身教育的国家二级心理咨询师姐姐",
    location: "美国东部",
  }));
  const onlineBuddy = [1, 2].map((item, index) => ({
    id: index,
    name: "xilin",
    info: "哈佛教育学院发展心理学硕士（在读）投身教育的国家二级心理咨询师姐姐",
    location: "美国东部",
  }));
  const handleShowCall = () => {
    setShowCalling(true);
  };
  const handleShowAll = () => {
    setShowCalling(false);
  };
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  const enterDetail = (item) => {
    history.push(`/mentors/${item.id}`);
  };
  const changeColor = (id) => {
    if (id % 3 === 1) {
      return {
        background: "#EBf2FF",
        hoverBackground: "#dbe3ff",
        color: "#86A2FF",
      };
    } else if (id % 3 === 2) {
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
        {showCalling
          ? onlineBuddy.map(({ id, name, info, location }) => (
              <BuddyDetail
                colorChange={changeColor(id)}
                image=""
                name={name}
                info={info}
                location={location}
                key={id}
              />
            ))
          : buddy.map(({ id, name, info, location }) => (
              <div key={id} onClick={() => enterDetail(id)}>
                <BuddyDetail
                  colorChange={changeColor(id)}
                  image=""
                  name={name}
                  info={info}
                  location={location}
                  key={id}
                />
              </div>
            ))}
      </div>
    </Container>
  );
}
export default React.memo(Mentors);
