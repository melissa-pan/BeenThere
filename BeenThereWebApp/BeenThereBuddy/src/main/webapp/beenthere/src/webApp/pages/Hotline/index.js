import React, { useRef } from "react";

import { Container, SideBar, Content } from "./style";
function Hotline() {
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
    { id: "china", text: "中国国内（含港澳台）" },
    { id: "usa", text: "美国" },
    { id: "canada", text: "加拿大" },
    { id: "uk", text: "英国" },
    { id: "australia", text: "澳大利亚" },
    { id: "others", text: "其他国家及地区" },
  ];

  const refs = countries.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
  const handleClick = (e, id) => {
    e.preventDefault();
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Container>
      <SideBar>
        {countries.map((item) => (
          <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
            <a href="#">{item.text}</a>
          </li>
        ))}
      </SideBar>
      <Content>
        <div className="section">
          <h1 className="title">心理支持服务热线（全球）</h1>
          <div className="description">
            心理支持服务热线向那些有需要的人士提供支援服务。在您需要援助或协助有需要人士时，您可以拨打求助热线。同时，如果您正为朋友担心，也请鼓励他/她致电热线取得帮助。
          </div>
        </div>
        <div className="section">
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
        </div>
        <div className="section" ref={refs["china"]}>
          <h1 className="title">中国国内及线上资源</h1>
          <p className="description description--bold">24 小时热线</p>
          {chineseHotline.map((hotline, index) => {
            return (
              <div className="description" key={index}>
                {hotline.institution} 电话号码：
                <span className="description--bold">{hotline.phone}</span>
              </div>
            );
          })}
          <br /> <br />
          <p className="description description--bold"> 非24 小时热线</p>
          <div className="description">
            全国公共卫生公益热线 电话号码：12320 <br />
            上海生命热线 电话号码： 400-821-1215/021-63798990 （10:00-22:00）{" "}
            <br />
            澳门社工局电话辅导热线 电话号码：（+853）2826 1126
            （工作日9:00-18:00） <br />
            延吉生命热线 电话号码：0433-273-9595 （8:00-16:00）
            <br />
            青岛市心理危机干预中心自杀干预热线
            电话号码：86669120（8:30-11:00/13:30-16:00）
          </div>
        </div>
        <div className="section" ref={refs["usa"]}>
          <h1 className="title">美国</h1>
          <div className="description">
            <p className="description--bold">国家预防自杀生命热线</p>
            <br />
            <a
              className="link"
              href="HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG
            </a>
            <br /> 电话：
            <span className="description--bold">1 800 273 (8255)</span> <br />
            Text TALK to 741741 to text with a trained crisis counselor from the
            Crisis Text Line for free, 24/7 Lifeline Crisis Chat
          </div>
          <br />
          <br />
          <div className="description">
            <p className="description--bold">Lifeline Crisis Chat</p>

            <a
              className="link"
              href="http://www.suicidepreventionlifeline.org/gethelp/lifelinechat.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              http://www.suicidepreventionlifeline.org/gethelp/lifelinechat.aspx
            </a>
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">退役军人求助专线</span>
            （现役美国军人、退役军人和其家人）
            <br />
            <a
              href="http://www.veteranscrisisline.net"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.veteranscrisisline.net
            </a>{" "}
            <br />
            电话：<span className="description--bold">1 800 273 8255</span>{" "}
            简讯：<span className="description--bold">838255</span>
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold"> The Trevor Project </span>
            （帮助同性恋青少年、朋友和家庭成员）
            <br />{" "}
            <a
              href="http://www.thetrevorproject.org"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.thetrevorproject.org
            </a>{" "}
            <br />
            电话： <span className="description--bold">1 866 488 73865</span>
          </div>
        </div>
        <div className="section" ref={refs["canada"]}>
          <h1 className="title">加拿大</h1>
          <div className="description">
            儿童求助热线（适合未满 20 岁的青少年） <br />
            电话： <span className="description--bold">1 800 6686868</span>{" "}
            <br />
            若年满 20 岁，请联络您所在地区的自杀危机处理中心：
            <br />
            <a
              className="link"
              href="http://suicideprevention.ca/thinking-aboutsuicide/find-a-crisis-centre"
              rel="noopener noreferrer"
              target="_blank"
            >
              http://suicideprevention.ca/thinking-aboutsuicide/find-a-crisis-centre
            </a>
          </div>
        </div>
        <div className="section" ref={refs["uk"]}>
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
            电话：<span className="description--bold">08457 90 90 90</span> (UK)
            ，<span className="description--bold">1850 60 90 90</span> (Republic
            of Ireland)
            <br />
            电邮地址：
            <span className="description--bold">jo@samaritans.org</span>
          </div>
        </div>
        <div className="section" ref={refs["australia"]}>
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
        </div>
        <div className="section" ref={refs["others"]}>
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
            <span className="description--bold">atendimento@cvv.org.br</span>
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
            <p className="description--bold">National Depression Initiative</p>
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
            <p className="description--bold">Samaritans of Singapore (SOS) </p>
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
              정신건강증진센터 정신건강위기상담전화 （精神健康危机处理谘询中心）
            </p>
            <br /> 电话：<span className="description--bold">1577-0199</span>{" "}
            （24 시간 위기상담 / 24 小时服务热线）
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
      </Content>
    </Container>
  );
}
export default React.memo(Hotline);
