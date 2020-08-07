import React, { useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";
import {
  Container,
  SideBar,
  Content,
  HeaderContainer,
  NavContainer,
  Section,
} from "./style";
import Image from "../../../img/资源 26@2x 1.png";
import Scroll from "../../components/Scroll";
import Horizen from "../../components/Horizen";
function Hotline(props) {
  const [showStatus, setShowStatus] = useState(true);

  const handleReturn = () => {
    setShowStatus(false);
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
  const chineseHotline = [
    { institution: "北京危机干预中心", phone: "010 - 8295 1332" },
    { institution: "北大心理危机援助热线", phone: "010 - 6194 3712" },
    { institution: "中科院心理所咨询志愿者热线", phone: "010 - 6485 1106" },
    {
      institution: "北京回龙观医院心理危机干预热线",
      phone: "800 - 810 - 1117",
    },
    {
      institution: "杭州市第七人民医院心理危机干预",
      phone: "0571 - 8502 9595",
    },
    {
      institution: "南京自杀干预中心救助热线",
      phone: "1689 6123",
    },
    {
      institution: "广州市心理危机干预中心热线",
      phone: "020 - 8189 9120",
    },
    {
      institution: "深圳市心理危机研究中心热线",
      phone: "0755 - 2562 9459",
    },
    {
      institution: "重庆心理危机干预热线",
      phone: "023 - 6537 2255",
    },
    {
      institution: "四川省心理危机干预中心热线",
      phone: "020 - 8757 7510 / 020 - 8752 8604",
    },
    {
      institution: "天津市心理危机干预热线",
      phone: "022 - 8818 8858",
    },
    {
      institution: "长春市心理援助热线",
      phone: "0431 - 8698 5000",
    },
    {
      institution: "昆明市心理危机与干预中心",
      phone: "0871 - 6501 1111",
    },
    {
      institution: "长春市心理援助热线",
      phone: "0431 - 8698 5000",
    },
    {
      institution: "厦门市精神卫生中心心理援助热线",
      phone: "0592 - 539 5159",
    },
    {
      institution: "澳门明爱生命热线",
      phone: "853 - 2852 5222",
    },
    {
      institution: "香港地区生命热线",
      phone: "852 - 2382 0000",
    },
    { institution: "台湾自杀防治中心", phone: "0800 788 995" },
  ];
  const countries = [
    { id: "all", name: "全球", active: true },
    { id: "china", name: "中国", active: true },
    { id: "usa", name: "美国", active: true },
    { id: "canada", name: "加拿大", active: true },
    { id: "uk", name: "英国", active: true },
    { id: "australia", name: "澳大利亚", active: true },
    { id: "others", name: "其他国家及地区", active: true },
  ];
  const [activeMenu, setActiveMenu] = useState(countries);

  const refs = countries.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  let [category, setCategory] = useState("");

  let handleUpdateCatetory = (id) => {
    setCategory(id);
    const newMenu = activeMenu.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setActiveMenu(newMenu);
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
        <HeaderContainer onClick={handleReturn}>
          {arrowIcon} <span>心理支持服务热线</span>
        </HeaderContainer>
        <img src={Image} alt="" className="image" />
        <NavContainer>
          <Horizen
            list={countries}
            title="全部"
            handleClick={handleUpdateCatetory}
            oldVal={category}
          ></Horizen>
        </NavContainer>
        <Content>
          <Section showStatus={activeMenu[0].active}>
            <h1 className="title">全球</h1>
            <div className="description">
              Befrienders{" "}
              <a
                href="http://www.befrienders.org"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.befrienders.org
              </a>
            </div>
          </Section>
          <Section showStatus={activeMenu[1].active}>
            <h1 className="title">中国国内及线上资源</h1>
            <div className="description">
              <span className=" description--bold">
                1.北京市卫健委和安定医院合作微信小程序：暖翼·知心
              </span>
              <br />
              一个提供心理测评并根据测评结果引导用户预约医生的平台。注意测评结果不等于诊断报告，还需要在见过医生之后才能得出结论；使用教程：
              <a
                className="link"
                href="https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q
              </a>
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                2.一个全英文的国内心理热线Lifeline
              </span>
              <br />
              为非中文母语者和暂时不方便直接用中文交谈的人群服务（比如说在家里不希望被父母听到内容的时候）
              <br />
              服务时间：北京时间早上10:00至晚上22:00
              <br />
              电话：4008211215
              <br />
              打字版本：微信公众号搜索LifelineConnect
              <br />
              <a
                className="link"
                href="https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q
              </a>
            </div>
            <br />
            <br />
            <p className="description description--bold">
              3. 各省市心理热线（鸣谢：微博@武心援团队 整理）
            </p>
            {chineseHotline.map((hotline, index) => {
              return (
                <div className="description" key={index}>
                  {hotline.institution}：
                  <span className="description--bold">{hotline.phone}</span>
                </div>
              );
            })}
            <br /> <br />
            <div className="description description--bold">
              4. 中国大陆地区反性别暴力支持资源
            </div>{" "}
            <br /> <br />
            <div className="description">
              <span className="description--bold">橙雨伞 (法律援助)</span>
              <br />
              <a
                className="link"
                href="https://chengyusan.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://chengyusan.cn/
              </a>
              <br />
              橙雨伞公益是一个关爱女性、赋能女性远离暴力的公益项目，首创媒体界、法律界和NGO的跨界合作模式，主要关注性别暴力、性别平等和女性权益等议题
              <br />{" "}
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                北京千千律师事务所 （法律援助）
              </span>
              <br />
              依托原北大法学院妇女法律研究与服务中心，成立于2009年；
              专职公益律师，专职开展公益法律服务活动，致力于推动包括妇女等社会弱势群体权益状况的改善
              <br />
              微信号: qianqianlawfirm_2009 <br />
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                北京红枫妇女心理咨询中心
              </span>
              <br />
              <a
                className="link"
                href="http://www.maple.org.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.maple.org.cn/
              </a>
              <br />
              成立于1988年10月，是中国第一家民间妇女组织。红枫中心由妇女问题专家王行娟及一些热心妇女事业的知识女性自愿组织成立，旨在用专业化的心理社会服务，维护妇女儿童的合法权益。
              <br />
              <br />
              机构类型：心理机构
              <br />
              服务群体：受害人（女性）、受害人（男性）、 受害人（性少数）
              <br />
              提供服务：情绪支持、家庭关系指导、制定安全计划、心理咨询、互助小组、资源链接
              <br />
              微信公众号：MapleWomenCenter
              <br />
              微博：红枫中心
              <br />
              电话号码：010-68333388（周一至周五，有语音提示） <br />
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">北京源众性别发展中心</span>
              <br />
              成立于 2011 年 11
              月，是一家专门从事妇女儿童权益保护及推动性别平等的公益机构。
              <br />
              机构类型：社工机构
              <br />
              服务群体：受害人（女性）、家暴目睹儿童、受暴儿童
              <br />
              提供服务：情绪支持、陪伴、家庭关系指导、制定安全计划、心理咨询、法律咨询、医疗救助、关系调解、经济援助、认知教育、资源链接
              <br />
              服务电话：010-89941101
              <br />
              服务电话接听时间：周一至周五，9:00-18:00
              <br />
              机构地址：北京市东城区
              <br />
              微信公众号：bjyuanzhong
              <br />
              微博：源众反暴力热线
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">妇女维权公益服务热线</span>
              <br />
              在全国范围内，用手机或座机拨打“区号+12338”可获得当地妇联提供的及时有效的维权咨询服务
            </div>{" "}
            <br /> <br />
            <div className="description">
              <span className="description--bold">
                反家暴地图 - 中国其它城市 更多公益组织！{" "}
              </span>
              <br />
              <a
                className="link"
                href="https://www.xinli001.com/info/100455141"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.xinli001.com/info/100455141
              </a>
              <br />
            </div>{" "}
            <br /> <br />
            <div className="description">
              <span className="description--bold">
                心援心 （公益疗愈音频）{" "}
              </span>
              <br />
              <a
                className="link"
                href="https://www.ximalaya.com/zhubo/218145726/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ximalaya.com/zhubo/218145726/
              </a>
              <br />
              “心援心”心理自我疗愈公益项目缘起新冠疫情的爆发，目标是帮助抗疫的医护工作者和广大民众免受创伤后应激障碍（PTSD）困扰，通过使用音频工具进行自我干预、自我关爱，实现自我疗愈。“心援心”由中国心理卫生协会、北京协和医学院公共卫生学院、欧美同学会留美医学会、中国老年保健协会联合发起，并由国际著名的心理疗愈大师和正念导师们定制了专业的疗愈音频，为抗疫英雄和有需要的大众提供心灵疗愈、放松减压、缓解焦虑、睡眠疗愈、情绪干预和管理、创伤后应激障碍疗愈等支持和帮助。（包括美国iRest
              for PTSD,{" "}
              <a
                className="link"
                href="https://www.irest.org/benefits/resolve-trauma"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.irest.org/benefits/resolve-trauma
              </a>
              ）
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                北京同志中心 （性少数支持，彩虹心理咨询）
              </span>
              <br />
              <a
                className="link"
                href="http://www.bjlgbtcenter.org.cn/s--221.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.bjlgbtcenter.org.cn/s--221.html
              </a>{" "}
              <br />
              北京同志中心成立于2008年，是一家在北京地区开展心理咨询、法律咨询以及社区服务，并在全国范围内开展同志去病理化倡导、跨性别反歧视倡导和多元性别教育的公益机构。北京同志中心心理咨询，以专业的服务、人本的态度、友善的环境、安全的空间，为性少数群体（LGBT）及他们的朋友或家人、亲友提供相应的心理辅导与咨询。
              <br />
              <br />
              微信公众号：北同文化
              <br />
              中国 LGBT 社会组织不完全地图：
              <br />
              <a
                className="link"
                href="https://www.zhihu.com/question/20578932/answer/19339714"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.zhihu.com/question/20578932/answer/19339714
              </a>
            </div>
            <br />
            <br />
            <div className="description description--bold">
              5. 一些精神医院的官方网址集合
              <br />
              <a
                className="link"
                href="https://www.douban.com/people/sciencecat/status/2398595392/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.douban.com/people/sciencecat/status/2398595392/
              </a>
            </div>{" "}
            <br /> <br />
            <div className="description">
              <span className=" description--bold">6. 其他</span>
              <br />
              心理学空间：查找咨询师是否是中美精神分析联盟成员
              <a
                className="link"
                href="https://www.psychspace.com/psych/category-671"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.psychspace.com/psych/category-671
              </a>
              <br /> <br />
              中美精神分析联盟成员（CAPA）简介：
              <a
                className="link"
                href="https://www.zhihu.com/question/25380632"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.zhihu.com/question/25380632
              </a>
            </div>{" "}
            <br /> <br />{" "}
          </Section>
          <Section showStatus={activeMenu[2].active}>
            <h1 className="title">美国</h1>
            <div className="description">
              <p className="description--bold">1. IM ALIVE</p>
              <br />
              <a
                className="link"
                href="https://www.imalive.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.imalive.org/
              </a>
              <br />
              一个免费的7/24小时在线自杀干预网站，可以随时进行在线聊天沟通（需要用英文）
            </div>
            <br />
            <br />
            <div className="description">
              <p className="description--bold">2. 741741</p> <br />
              <a
                className="link"
                href="https://www.crisistextline.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.crisistextline.org/
              </a>
              <br />
              一个免费的7/24小时基于短信聊天的心理危机干预服务Crisis Text
              Line，用美国/加拿大/英国手机号向741741发送HOME即可开始聊天
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">3. The Trevor Project</span>
              <br />
              <a
                href="https://www.thetrevorproject.org/"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                https://www.thetrevorproject.org/
              </a>{" "}
              <br />
              一个免费的7/24小时专门针对LGBTQ青年群体的自杀干预网站，同时提供电话、在线聊天以及短信聊天三种方式，详见网站说明。
            </div>{" "}
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                4. 美国全国自杀干预热线（7/24小时免费电话服务）{" "}
              </span>
              <br />
              1-800-273-8255（普通）
              <br />
              1-800-799-4889（听障人士）
              <br />
              1-800-985-5900（灾难危机干预）
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                5. 各州及各郡地方心理热线及服务时间
              </span>
              <br />
              <a
                href="http://www.suicide.org/suicide-hotlines.html"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                http://www.suicide.org/suicide-hotlines.html
              </a>
              <br />
              整理较为全面（仅限美国部分，中国部分的信息是错误的）
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                6. 美国国家预防自杀生命热线
              </span>
              <br />
              <a
                href="HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG
              </a>
              <br />
              电话：1 800 273 TALK (8255)
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                7. 性暴力幸存者心理干预热线
              </span>
              <br />
              <a
                href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                https://www.rainn.org/about-national-sexual-assault-telephone-hotline
              </a>
            </div>
          </Section>
          <Section showStatus={activeMenu[3].active}>
            <h1 className="title">加拿大</h1>
            <div className="description">
              <span className="description--bold">
                1.
                good2talk.ca为post-secondary（college或大学）学生提供短信及电话服务。
              </span>
              <br />
              Good2Talk provides confidential support services for{" "}
              <span className="description--bold">post-secondary students</span>
              in Ontario and Nova Scotia. <br />
              In <span className="description--bold"> Ontario</span>: call
              1-866-925-5454 or text GOOD2TALKON to 686868 <br />
              In <span className="description--bold"> Nova Scotia</span>: call
              1-833-292-3698 or text GOOD2TALKNS to 686868
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">2. 加拿大全国范围的热线</span>
              <br />
              <a
                href="https://kidshelpphone.ca/ "
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                https://kidshelpphone.ca/
              </a>
              or text, live chat and phone call.
              为20岁及以下的人提供服务，有短信电话以及线上聊天的形式。
              <br />
              Kids Help Phone is Canada’s only 24/7, national support service.
              We offer professional counselling, information and referrals and
              volunteer-led, text-based support to young people in both English
              and French.
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Bullying</span>
              <br />
              Helpline：1-888-456-2323 针对霸凌
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Bullying</span>
              <br />
              Helpline：1-888-456-2323 针对霸凌
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Child Abuse</span>
              <br />
              Hotline：1-800-387-5437 针对儿童虐待
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Addiction</span>
              <br />
              Helpline：1-866-332-2322 针对物质成瘾
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Mental Health </span>
              <br />
              Helpline：1-877-303-2642 心理健康热线
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                Montreal蒙特利尔
                （中法双语服务，不熟悉法语的来访者可以打全国热线）
              </span>
              <br />
              Suicide Action Montreal (SAM) 1-866-277-3553 (Toll Free) 自杀预防
              <a
                href="http://www.suicideactionmontreal.org"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                http://www.suicideactionmontreal.org
              </a>
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                Crisis and Distress lines in Alberta阿尔伯塔省地区:
              </span>
              <br />
              Edmonton埃德蒙顿 and area：780-482-HELP (4357)
              <br />
              Red Deer north：1-800-232-7288
              <br />
              Calgary卡尔加里 and Red Deer south：403-266-HELP (4357)
              <br />
              South Western Alberta: 403-327-7905 or toll- free：1-888-787-2880
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Ottawa area渥太华:</span>
              <br />
              全年无休24/7紧急心理状况热线：613-238-3311
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">Toronto Area多伦多:</span>
              <br />
              Distress centre of Greater Toronto:
              <a
                href="https://www.dcogt.com/408-help-line"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                https://www.dcogt.com/408-help-line
              </a>
              （网站上还提供各式support program和prevention service）
              <br />
              全年无休24/7紧急心理状况热线电话：408-HELP (4357)
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                Multilingual crisis line (available Monday to Friday - 10am to
                10pm)：多伦多热线干预中心提供提供普通话和粤语服务
              </span>
              <br />
              905-459-7777 (Brampton & Mississauga)宾顿和密西沙加 <br />
              1-877-298-5444 (Caledon) 卡利登 <br />
              905-278-4890 (TTY)按2粤语，按3普通话 <br />
              电子邮件：info@spectrahelpline.org
            </div>
            <br />
            <br />
            <div className="description">
              <span className="description--bold">
                Vancouver Area温哥华：Vancouver distress centre温哥华热线中心
              </span>
              <br />
              Anywhere in BC 1-800-SUICIDE: 1-800-784-2433 自杀热线
              <br />
              Mental Health Support Line: 310-6789 所有心理状况支持
              <br />
              Vancouver Coastal Regional Distress Line: 604-872-3311 <br />
              Sunshine Coast/Sea to Sky: 1-866-661-3311
              <br />
              Seniors Distress Line: 604-872-1234 针对老人
              <br />
              Online Chat Service for Youth: www.YouthInBC.com (Noon to 1am)
              未成年线上聊天
              <br />
              Online Chat Service for Adults: www.CrisisCentreChat.ca (Noon to
              1am)成年线上聊天
            </div>{" "}
          </Section>
          <Section showStatus={activeMenu[4].active}>
            <h1 className="title">英国</h1>
            <div className="description">
              <p className="description--bold">撒玛利亚会</p>
              <br />{" "}
              <a
                href="http://www.samaritans.org"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                {" "}
                http://www.samaritans.org
              </a>
              <br />
              电话：<span className="description--bold">
                08457 90 90 90
              </span>{" "}
              (UK) ，<span className="description--bold">1850 60 90 90</span>{" "}
              (Republic of Ireland)
              <br />
              电邮地址：
              <span className="description--bold">jo@samaritans.org</span>
            </div>
          </Section>
          <Section showStatus={activeMenu[5].active}>
            <h1 className="title">澳大利亚</h1>
            <div className="description">
              <p className="description--bold">澳大利亚生命热线</p> <br />
              <a
                href="http://www.lifeline.org.au"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                http://www.lifeline.org.au
              </a>
              <br />
              电话：<span className="description--bold">13 11 14</span>
            </div>
            <br />
            <br />
            <div className="description">
              <p className="description--bold">儿童求助热线</p> <br />
              <a
                className="link"
                href="http://www.kidshelp.com.au"
                rel="noopener noreferrer"
                target="_blank"
              >
                http://www.kidshelp.com.au
              </a>{" "}
              <br />
              电话：<span className="description--bold">1800 55 1800</span>
            </div>
            <br />
            <br />
            <div className="description">
              <p className="description--bold">Headspace</p> <br />
              <a
                href="http://www.eheadspace.org.au"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                http://www.eheadspace.org.au
              </a>{" "}
              <br />
              电话： <span className="description--bold">1800 650 890</span>
            </div>
          </Section>
          <Section showStatus={activeMenu[6].active}>
            <div className="section">
              <h1 className="title">巴西/葡萄牙</h1>
              <div className="description">
                <p className="description--bold">CVV</p>
                <br />{" "}
                <a
                  href="http://www.cvv.org.br"
                  rel="noopener noreferrer"
                  className="link"
                  target="_blank"
                >
                  http://www.cvv.org.br
                </a>
                <br />
                电话：<span className="description--bold">188</span>
                <br />
                电邮地址：
                <span className="description--bold">
                  atendimento@cvv.org.br
                </span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">丹麦</h1>
              <div className="description">
                <p className="description--bold">Livslinien</p>
                <br />{" "}
                <a
                  href="http://www.livslinien.dk"
                  rel="noopener noreferrer"
                  className="link"
                  target="_blank"
                >
                  http://www.livslinien.dk
                </a>
                <br />
                电话：<span className="description--bold">70 201 201</span>
                <br />
              </div>
              <br />
              <div className="description">
                <p className="description--bold">Børne </p>
                <br />{" "}
                <a
                  href="https://bornetelefonen.dk/ring"
                  rel="noopener noreferrer"
                  className="link"
                  target="_blank"
                >
                  https://bornetelefonen.dk/ring
                </a>
                <br />
                电话：<span className="description--bold">116 111</span> (Child
                Helpline is open daily from 11:00-23:00.)
                <br />
              </div>
            </div>
            <div className="section">
              <h1 className="title">芬兰</h1>
              <div className="description">
                <p className="description--bold">Suomen Mielenterveysseura</p>
                <br />{" "}
                <a
                  href="http://www.e-mielenterveys.fi/en/"
                  rel="noopener noreferrer"
                  className="link"
                  target="_blank"
                >
                  http://www.e-mielenterveys.fi/en/
                </a>
                <br />
                电话：<span className="description--bold">01019 5202</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">法国</h1>
              <div className="description">
                <p className="description--bold">S.O.S Amitié</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.sos-amitie.org"
                  className="link"
                  target="_blank"
                >
                  http://www.sos-amitie.org
                </a>
                <br />
                电话：<span className="description--bold">01 42 96 26 26</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">德国</h1>
              <div className="description">
                <p className="description--bold">Telefonseelsorge</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.telefonseelsorge.de"
                  className="link"
                  target="_blank"
                >
                  http://www.telefonseelsorge.de
                </a>
                <br />
                电话：
                <span className="description--bold">
                  0800 111 0 111 / 0800 111 0 222
                </span>
                <br />
                <p className="description--bold">Nummer gegen Kummer</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nummergegenkummer.de"
                  className="link"
                  target="_blank"
                >
                  https://www.nummergegenkummer.de
                </a>
                <br />
                电话：
                <span className="description--bold">
                  0800 111 0 550（成人） / 0800 111 0 333（儿童）
                </span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">希腊</h1>
              <div className="description">
                <p className="description--bold">Klimaka NGO</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.klimaka.org.gr"
                  className="link"
                  target="_blank"
                >
                  http://www.klimaka.org.gr
                </a>
                <br />
                <p className="description--bold">Suicide Help Greece</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.suicide-help.gr"
                  className="link"
                  target="_blank"
                >
                  http://www.suicide-help.gr
                </a>
                <br />
                电话：<span className="description--bold">1018</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">意大利</h1>
              <div className="description">
                <p className="description--bold">Telefono Azzurro</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="www.azzurro.it"
                  className="link"
                  target="_blank"
                >
                  www.azzurro.it
                </a>
                <br />
                电话：<span className="description--bold">19696 </span>
                <br />
                <p className="description--bold">Telefono Amico</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.telefonoamico.it"
                  className="link"
                  target="_blank"
                >
                  http://www.telefonoamico.it
                </a>
                <br />
                电话：<span className="description--bold">199 284 284</span>
              </div>
            </div>{" "}
            <div className="section">
              <h1 className="title">新西兰</h1>
              <div className="description">
                <p className="description--bold">
                  National Depression Initiative
                </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.depression.org.nz"
                  className="link"
                  target="_blank"
                >
                  http://www.depression.org.nz
                </a>
                <br />
                <p className="description--bold">The Lowdown</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href=" http://www.thelowdown.co.nz"
                  className="link"
                  target="_blank"
                >
                  http://www.thelowdown.co.nz
                </a>
                <br />
                电话：<span className="description--bold">0800 111 757</span>
                <br />
                简讯：<span className="description--bold">5626 </span>
                <br />
                电邮地址：
                <span className="description--bold">team@thelowdown.co.nz</span>
                <br />
                <p className="description--bold">Youthline </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href=" http://www.youthline.co.nz"
                  className="link"
                  target="_blank"
                >
                  http://www.youthline.co.nz
                </a>
                <br />
                电话：<span className="description--bold">0800 376633</span>
                <br />
                简讯：<span className="description--bold">234 </span>
                <br />
                电邮地址：
                <span className="description--bold">
                  talk@youthline.co.nz / parenttalk@youthline.co.nz
                </span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">挪威</h1>
              <div className="description">
                <p className="description--bold">Kirkens SOS</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.kirkens-sos.no"
                  className="link"
                  target="_blank"
                >
                  http://www.kirkens-sos.no
                </a>
                <br />
                电话：<span className="description--bold">815 33 300</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">波兰</h1>
              <div className="description">
                <p className="description--bold">Fundacja Dzieci Niczyje</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.116111.pl/napisz"
                  className="link"
                  target="_blank"
                >
                  http://www.116111.pl/napisz
                </a>
                <br />
                电话：<span className="description--bold">116 111</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">新加坡</h1>
              <div className="description">
                <p className="description--bold">
                  Samaritans of Singapore (SOS){" "}
                </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href=" http://samaritans.org.sg"
                  className="link"
                  target="_blank"
                >
                  http://samaritans.org.sg
                </a>
                <br />
                电话：<span className="description--bold">1800 221 4444</span>
                <br />
                电邮地址：
                <span className="description--bold">pat@samaritans.org.sg</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">南非</h1>
              <div className="description">
                <p className="description--bold">
                  The South African Depression and Anxiety Group (SADAG)
                </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href=" http://www.sadag.org "
                  className="link"
                  target="_blank"
                >
                  http://www.sadag.org
                </a>
                <br />
                电话：<span className="description--bold">0800 567 567</span>
                <br />
                简讯：
                <span className="description--bold">31393</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">韩国</h1>
              <div className="description">
                <p className="description--bold">
                  중앙자살예방센터 （韩国自杀干预中心）
                </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="www.spckorea.or.kr"
                  className="link"
                  target="_blank"
                >
                  www.spckorea.or.kr
                </a>
                <br />
                电话：<span className="description--bold">+82 2-2203-0053</span>
                <br />
                电邮地址：
                <span className="description--bold">spc@spckorea.or.kr</span>
                <br />
                <p className="description--bold">HopeClick </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href=" http://www.hopeclick.or.kr"
                  className="link"
                  target="_blank"
                >
                  http://www.hopeclick.or.kr
                </a>
                <br />
                <p className="description--bold">
                  보건복지부 보건복지콜센터（卫生与福利热线中心）
                </p>
                <br /> 电话：<span className="description--bold">129</span> （24
                시간 위기상담 / 24 小时服务热线）
                <br />
                <p className="description--bold">
                  정신건강증진센터 정신건강위기상담전화
                  （精神健康危机处理谘询中心）
                </p>
                <br /> 电话：
                <span className="description--bold">1577-0199</span> （24 시간
                위기상담 / 24 小时服务热线）
              </div>
            </div>
            <div className="section">
              <h1 className="title">西班牙</h1>
              <div className="description">
                <p className="description--bold">Teléfono de la Esperanza</p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://telefonodelaesperanza.org"
                  className="link"
                  target="_blank"
                >
                  http://telefonodelaesperanza.org
                </a>
                <br />
                电话：<span className="description--bold">902500002</span>
              </div>
            </div>
            <div className="section">
              <h1 className="title">瑞士</h1>
              <div className="description">
                <p className="description--bold">
                  {" "}
                  La Main Tendue – Die Dargebotene Hand – Telefono Amico
                </p>
                <br />{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://www.143.ch"
                  className="link"
                  target="_blank"
                >
                  http://www.143.ch
                </a>
                <br />
                电话：<span className="description--bold">143</span>
              </div>
            </div>
          </Section>
        </Content>

        {/* <SideBar>
          {countries.map((item) => (
            <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
              <a href="#">{item.text}</a>
            </li>
          ))}
        </SideBar> */}
      </Container>
    </CSSTransition>
  );
}
export default React.memo(Hotline);
