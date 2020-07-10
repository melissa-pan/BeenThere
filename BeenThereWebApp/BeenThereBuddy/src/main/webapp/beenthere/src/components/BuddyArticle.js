import React, { useState } from "react";
import style from "../global-style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Image from "../img/lexi_v.png";
import Gallery1 from "../img/lexi_v1.png";
import Gallery2 from "../img/lexi_v2.png";
import Gallery3 from "../img/lexi_v3.png";
// import { renderRoutes } from "react-router-config";
const Section = styled.div`
  text-align: center;
  margin: 10rem;
  padding: 0 12rem;

  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /*margin-right: 2rem; */
    margin-bottom: 2rem;
    color: ${style["font-color-light-1"]};
    &--title {
      margin: 3rem auto;
      width: 100%;
      font-size: ${style["font-size-ls"]};

      /* margin: 0 50%; */
    }
    &--content {
      /* margin: 5rem; */
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-l"]};
    }
  }
  .articles {
    display: flex;
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
`;
const ArticleItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-content: center;
  width: 42rem;
  height: 11rem;
  margin: 1rem;

  padding: 1rem;
  border: 2px solid
    ${(props) => (props.active ? style["highlight-color"] : "transparent")};
  cursor: pointer;
  .shape {
    flex: 0 0 25%;
    height: 100%;
  }
  .image {
    height: 100%;
    /* transform: scale(0.6); */
    transition: all 0.2s;
  }
  .text {
    flex: 1;
    text-align: left;
    padding: 5px;
    overflow: hidden;
  }
  .title {
    font-size: ${style["font-size-m"]};
  }
  .content {
    font-size: ${style["font-size-s"]};
    line-height: ${style["line-height-l"]};
  }
`;
function BuddyVideo(props) {
  const articles = [
    {
      userid: 2,
      articleId: 1,
      title: "你好，我叫程卓",
      content: [
        "我从小在新疆乌鲁木齐长大，直到大学前都是一个生活以刷题为主旋律的小朋友。在2009年，我以新疆理科第一名的成绩考入了清华大学，然后立刻体验了一回边远地区同学被学术碾压的巨大落差（泪目）。",
        "之后不断寻找方向，寻找定位。学习成绩中不溜，没挤进团委学生会的“大舞台”，作为商科学生居然大三过了一半才开始第一份实习…… 终于，在大三结束之前找到了自己的“点”，义无反顾地扎进去做到极致，最终在毕业时获得了最想去的公司的offer。",
        "从高中“实验班”、大学“状元班”、麦肯锡“总裁班”，到后来的麻省理工和哈佛大学“很有面子班”，我短暂的人生经历了无数“天纵英才”型的选手，而他们则成功地把我锻炼成了一枚“小强”型选手。我很早就看到了自己在数理化上面的极限，所以果断转了社会学科；我的第一份实习是做走街串巷的推销员，那就当锻炼脸皮嘴皮；哈佛申请了三年四遍，创业做散了四拨团队……这些才是人生常态，要像一个“小强”一样去面对。",
        "我不认为自己天分卓群，但是作为普通人，也有自己的生存本领。比如说，我从来不妄想在许多方面都比别人强；相反，我会找准最适合自己的一两件事，做到极致。我从来都不认为自己的任何一个观点是完全正确的，只能不断小心地增加正确的概率，随时准备被纠正甚至推翻。我至今没有完全克服打游戏上瘾的问题，所以我的办法就是，尽量不去碰它……",
        " 如果你也找不到奋斗的方向，如果你也挣扎在强手如林的地方，如果你也对自己的明天怀有期待，那我的存在就是一个好消息。作为一个普通人，我们一样可以扬长避短，加上一点点笑对失败的“小强”精神，最终得到那些我们羡慕的东西。I have been there, and we can make it.  ",
        "期待成为你的Buddy，让我陪你笑对挫折，让我们一起寻找方向，让我们成为更好的人。",
      ],
      image: "21.png",
      active: true,
    },
    {
      userid: 2,
      articleId: 2,
      title: "哈哈哈哈",
      content: ["哈哈哈哈哈哈"],
      image: "21.png",
      active: false,
    },
  ];
  const { article, name, id } = props;

  const handleClick = (id) => {
    const newArticles = articles.map((article) =>
      article.articleId === id
        ? { ...article, active: true }
        : { ...article, active: false }
    );
    setArticless(newArticles);
  };
  const [articless, setArticless] = useState(articles);
  // useEffect(() => {
  //   setArticless

  // }, [input])
  return (
    <Section>
      <div className="title">TA的文章</div>

      {article ? (
        <React.Fragment>
          {articless
            .filter((article) => article.active)
            .map((article) => (
              <div>
                <div className="article">
                  <img
                    src={`/articles/${article.image}`}
                    alt="gallery"
                    className="gallery--image"
                  />
                  <div className="article--title">{article.title}</div>
                  <div className="article--content">
                    {article.content.map((par) => (
                      <p
                        style={{
                          marginBottom: "20px",
                          textAlign: "left",
                          padding: "0 15px",
                        }}
                      >
                        {par}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          <div className="bar"></div>
          <div className="articles">
            {articless.map((article) => (
              <ArticleItem
                active={article.active}
                onClick={() => handleClick(article.articleId)}
              >
                <figure className="shape">
                  <img
                    src={`/articles/21.png`}
                    alt="gallery"
                    className="image"
                  />
                </figure>
                <div className="text">
                  <h3 className="title">{article.title}</h3>
                  <p className="content">
                    {article.content.map((par) => (
                      <span>{par}</span>
                    ))}
                  </p>
                </div>
              </ArticleItem>
            ))}
          </div>
          <button className="button">查看更多 </button>
        </React.Fragment>
      ) : (
        <p>空空如也</p>
      )}
    </Section>
  );
}
export default React.memo(BuddyVideo);
