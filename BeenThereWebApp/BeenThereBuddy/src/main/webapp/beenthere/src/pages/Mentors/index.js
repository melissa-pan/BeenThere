import React, { useState } from "react";

import { renderRoutes } from "react-router-config";
import BuddyDetail from "../../components/BuddyDetail";
import {
  SearchAllButton,
  SearchCallButton,
  SearchBar,
  Container,
} from "./style";
function Mentors(props) {
  const { route, history } = props;
  // console.log(route);
  const [showCalling, setShowCalling] = useState(false);
  const [input, setInput] = useState(undefined);

  const buddy = [1, 2, 3, 4].map((item, index) => ({
    id: index,
    name: "lexi",
    info: "哈佛教育学院发展心理学硕士（在读）投身教育的国家二级心理咨询师姐姐",
    location: "坐标：美国东部",
  }));
  const onlineBuddy = [1].map((item, index) => ({
    id: index,
    name: "xilin",
    info: "哈佛教育学院发展心理学硕士（在读）投身教育的国家二级心理咨询师姐姐",
    location: "坐标：美国东部",
  }));
  const handleShowCall = () => {
    setShowCalling(true);
  };
  const handleShowAll = () => {
    setShowCalling(false);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const enterDetail = (item) => {
    console.log(item.id, "mentors");
    history.push(`/mentors/${item.id}`);
  };

  return (
    <Container>
      <div className="title">BeenThere Buddy</div>
      <div className="description">
        <p>
          目前我们有 100 余位Online Buddy, TA 们是来自世界各地名校的活跃志愿者
        </p>
        <p>来自哈佛、麻省理工、斯坦福、伯克利、清华、北大、复旦等海内外名校</p>
      </div>
      <button className="button" href="#">
        查看 Buddy 值班日历 >
      </button>
      <SearchBar>
        <SearchCallButton onClick={handleShowCall} changeStyle={showCalling}>
          可语音的 Buddy
        </SearchCallButton>
        <SearchAllButton onClick={handleShowAll} changeStyle={showCalling}>
          全部 Buddy
        </SearchAllButton>
        <div className="input-box">
          <i className="icon">addddddd</i>
          <input
            text="text"
            className="input"
            placeholder="搜索 Buddy"
            value={input}
            onChange={handleChange}
          />
        </div>
      </SearchBar>
      <div className="buddy-record">
        {showCalling
          ? onlineBuddy.map(({ id, name, info, location }) => (
              <BuddyDetail
                background=""
                image=""
                name={name}
                info={info}
                location={location}
                key={id}
                // handleClick={() => handleClick(id)}
              />
            ))
          : buddy.map((item) => (
              <div key={item.id} onClick={() => enterDetail(item)}>
                <BuddyDetail
                  background=""
                  image=""
                  name={item.name}
                  info={item.info}
                  location={item.location}
                  key={item.id}
                />
              </div>
            ))}
      </div>

      {/* {renderRoutes(route.routes)} */}
    </Container>
  );
}
export default React.memo(Mentors);
