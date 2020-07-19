import React, { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import Footer from "../../components/Footer";
import BuddyIntroBoard from "./components/BuddyIntroBoard";
import ThankCard from "./components/ThankCard";
import BuddyVideo from "./components/BuddyVideo";
import BuddyArticle from "./components/BuddyArticle";
// import BuddyQuoteBoard from "./components/BuddyQuoteBoard";
// import Checklist from "./components/Checklist";
import HotlineCard from "./components/HotlineCard";
import { connect } from "react-redux";
import { fetchedMentorData } from "../../redux/index";
import { isEmptyObject } from "../../../utils/utils";
import { Section, HeaderContainer, SideBar, PriceCard } from "./style";
import Button from "../../components/Button";
// import { Link } from "react-router-dom";
function Mentor(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [showPrice, setShowPrice] = useState(false);

  const { buddyInfo } = props;
  const { fetchedMentorData } = props;
  const { history } = props;
  const id = props.match.params.id;
  useEffect(() => {
    fetchedMentorData(id);
    return () => {
      fetchedMentorData(id);
    };
  }, []);
  const handleReturn = () => {
    setShowStatus(false);
  };

  // const handleCloseChecklist = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setShowChecklist(false);
  //   setShowHotline(true);
  // };
  // const handleCloseHotline = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setShowHotline(false);
  // };
  const menu = [
    { id: "videos", active: true, text: "视频" },
    { id: "articles", active: false, text: "文章" },
    { id: "thankscards", active: false, text: "感谢卡" },
  ];
  const [activeMenu, setActiveMenu] = useState(menu);
  const handleClick = (e, id) => {
    e.preventDefault();

    const newMenu = menu.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setActiveMenu(newMenu);
  };

  // const sideRef = React.createRef();
  const [paddingTop, setPaddingTop] = useState(0);

  const changeSideBar = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    if (scrollTop > 500 && scrollTop < 2500) {
      // sideRef.current.client = 200;

      setPaddingTop(scrollTop - 500);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", changeSideBar);
    return () => {
      document.removeEventListener("scroll", changeSideBar);
    };
  }, [paddingTop]);
  const handleAppointment = (id) => {
    history.push(`/mentors/${id}/checklist`);
  };
  const handleShowPrice = () => {
    setShowPrice(!showPrice);
  };
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
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      {!isEmptyObject(buddyInfo) ? (
        <React.Fragment>
          <Section showPrice={showPrice}>
            <HeaderContainer onClick={handleReturn}>
              {arrowIcon} <span>返回</span>
            </HeaderContainer>

            <BuddyIntroBoard buddyInfo={buddyInfo} />
            <SideBar paddingTop={paddingTop}>
              {menu.map((item) => (
                <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </SideBar>
            <BuddyVideo
              video={buddyInfo.video}
              name={buddyInfo.name}
              id={id}
              showStatus={activeMenu[0].active}
            />

            <BuddyArticle
              id={id}
              article={buddyInfo.article}
              showStatus={activeMenu[1].active}
            />
            <ThankCard
              thankcards={buddyInfo.thankcards}
              showStatus={activeMenu[2].active}
            />
            {/* <BuddyQuoteBoard
              handleShowChecklist={handleShowChecklist}
              service={buddyInfo.service}
              id={id}
              avatar={buddyInfo.avatar}
            /> */}

            {/* <HotlineCard
              showStatus={showHotline}
              handleCloseHotline={handleCloseHotline}
            /> */}
            {buddyInfo.service === "ready" ? (
              <div className="appointment appointment--1">
                <div onClick={() => handleAppointment(id)} className="button">
                  <Button
                    background="#a7a7ff"
                    fontColor="#ffffff"
                    hoverBackground="#9c9cff"
                    style={{ height: "45px", fontSize: "16px" }}
                  >
                    我要预约
                  </Button>
                </div>
                <div className="price">
                  <div className="price--text" onClick={handleShowPrice}>
                    显示价格
                    <span className="price--icon">{arrowIcon}</span>
                  </div>
                  <PriceCard className="price-card" showPrice={showPrice}>
                    <div className="service">
                      <div className="service--type">和TA语音</div>
                      <div className="service--price">
                        <div>199元/25分钟</div>
                        <div className="service--hot">259元/50分钟</div>
                      </div>
                    </div>
                    <div className="service">
                      <div className="service--type">和TA视频</div>
                      <div className="service--price">
                        <div>359元/50分钟</div>
                      </div>
                    </div>
                  </PriceCard>
                </div>
                <div className="text text--highlight">
                  *你在BeenThere购买的所有服务，都会有 5%捐献给 xx慈善组织
                </div>
              </div>
            ) : (
              <div className="appointment">
                <a href="https://wj.qq.com/s2/6734752/cd0e/">
                  <Button
                    background="#a7a7ff"
                    fontColor="#ffffff"
                    hoverBackground="#9c9cff"
                    style={{ height: "45px", fontSize: "16px" }}
                  >
                    希望和TA语音
                  </Button>
                </a>
                <div className="text">
                  <br />* Buddy暂未开通语音/视频服务...
                </div>
              </div>
            )}
          </Section>
          {/* <Footer /> */}
        </React.Fragment>
      ) : (
        <p>Loading data</p>
      )}
    </CSSTransition>
  );
}

const mapStateToProps = (state) => ({
  buddyInfo: state.buddy.buddyInfo,
});
const mapDispatchToProps = {
  fetchedMentorData,
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Mentor));
