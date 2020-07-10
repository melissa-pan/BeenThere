import React, { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import Footer from "../../components/Footer";
import BuddyIntroBoard from "../../components/BuddyIntroBoard";
import ThankCard from "../../components/ThankCard";
import BuddyVideo from "../../components/BuddyVideo";
import BuddyArticle from "../../components/BuddyArticle";
import BuddyQuoteBoard from "../../components/BuddyQuoteBoard";
import Checklist from "../../components/Checklist";
import HotlineCard from "../../components/HotlineCard";
import { connect } from "react-redux";
import { fetchedMentorData } from "../../redux/index";
import { isEmptyObject } from "../../utils/utils";
import { Section, HeaderContainer } from "./style";
function Mentor(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showHotline, setShowHotline] = useState(false);
  const { buddyInfo } = props;
  const { fetchedMentorData } = props;
  const id = props.match.params.id;
  useEffect(() => {
    fetchedMentorData(id);
  }, []);
  const handleReturn = () => {
    setShowStatus(false);
  };
  const handleShowChecklist = (e) => {
    e.preventDefault();

    e.stopPropagation();
    setShowChecklist(true);
  };
  const handleCloseChecklist = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowChecklist(false);
    setShowHotline(true);
  };
  const handleCloseHotline = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowHotline(false);
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
      {!isEmptyObject(buddyInfo) ? (
        <React.Fragment>
          <Section>
            <HeaderContainer onClick={handleReturn}>
              <h1> &larr; 返回</h1>
            </HeaderContainer>

            <BuddyIntroBoard
              handleShowChecklist={handleShowChecklist}
              buddyInfo={buddyInfo}
            />

            <BuddyVideo video={buddyInfo.video} name={buddyInfo.name} id={id} />

            <BuddyArticle id={id} article={buddyInfo.article} />
            <ThankCard />
            <BuddyQuoteBoard
              handleShowChecklist={handleShowChecklist}
              service={buddyInfo.service}
              id={id}
            />

            <Checklist
              showStatus={showChecklist}
              handleCloseChecklist={handleCloseChecklist}
            />
            <HotlineCard
              showStatus={showHotline}
              handleCloseHotline={handleCloseHotline}
            />
          </Section>
          <Footer />
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
