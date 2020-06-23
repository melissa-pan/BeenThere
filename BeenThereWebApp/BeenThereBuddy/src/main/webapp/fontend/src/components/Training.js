import React from "react";
import styled from "styled-components";
import style from "../global-style";
import Image from "../img/资源_16@2x_1.png";
import Button from "./Button";
import { Link } from "react-router-dom";
const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 7.5rem;

  .description {
    /* width: 60%; */
    padding-left: 5rem;
    margin: auto 2rem;

    &__title {
      font-size: ${style["font-size-ll"]};
      line-height: ${style["line-height-ll"]};
      margin-bottom: 3rem;
    }
    &__sub {
      font-size: ${style["font-size-l"]};
      margin-bottom: 3rem;

      span {
        display: block;
        line-height: ${style["line-height-m"]};
      }
    }
  }
  .photo {
    margin: 0 2rem;
    width: 45%;
    img {
      width: 100%;
    }
  }
`;

function Training() {
  return (
    <Section>
      <div className="description">
        <h3 className="description__title">21天人生解压舱</h3>
        <h2 className="description__sub">
          <span>莫愁前路无知己，BeenThere Buddy在等你</span>
          <span>我们来自各地，有着不同的经历</span>
          <span>我们愿意倾听，愿意分享</span>
          <span>为你提供最私密，最暖心的倾听陪伴</span>
          <span>足不出户就能得到的即时心理支持</span>
        </h2>
        <Link to="/training">
          <Button>来聊聊吧</Button>
        </Link>
      </div>
      <div className="photo">
        <img src={Image} alt="design responsive"></img>
      </div>
    </Section>
  );
}
export default React.memo(Training);
