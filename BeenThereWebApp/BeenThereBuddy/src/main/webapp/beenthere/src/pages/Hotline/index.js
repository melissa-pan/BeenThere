import React from "react";
import { Container, SideBar, Content } from "./style";
export default function Hotline() {
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
  ];
  return (
    <Container>
      <SideBar>
        <li>
          <a href="#china">中国国内</a>
        </li>
        <li>
          <a href="#usa">美国</a>
        </li>
        <li>
          <a href="#canada">加拿大</a>
        </li>
        <li>
          <a href="#uk">英国</a>
        </li>
        <li>
          <a href="#australia">澳大利亚</a>
        </li>
        <li>
          <a href="#others">其他国家</a>
        </li>
      </SideBar>
      <Content>
        <div className="section">
          <h1 className="title">心理支持服务热线（全球）</h1>
          <p className="description">
            心理支持服务热线向那些有需要的人士提供支援服务。在您需要援助或协助有需要人士时，您可以拨打求助热线。同时，如果您正为朋友担心，也请鼓励他/她致电热线取得帮助。
          </p>
        </div>
        <div className="section">
          <h1 className="title">全球</h1>
          <p className="description">
            Befrienders{" "}
            <a
              href="http://www.befrienders.org"
              className="link"
              target="_blank"
            >
              http://www.befrienders.org
            </a>
          </p>
        </div>
        <div id="china" className="section">
          <h1 className="title">中国国内及线上资源</h1>
          <p className="description description--bold">24 小时热线</p>
          {chineseHotline.map((hotline) => {
            return (
              <p className="description">
                {hotline.institution} 电话号码：
                <span className="description--bold">{hotline.phone}</span>
              </p>
            );
          })}
          <br /> <br />
          <p className="description description--bold"> 非24 小时热线</p>
          <p className="description">
            全国公共卫生公益热线 电话号码：12320 <br />
            上海生命热线 电话号码： 400-821-1215/021-63798990 （10:00-22:00）{" "}
            <br />
            澳门社工局电话辅导热线 电话号码：（+853）2826 1126
            （工作日9:00-18:00） <br />
            延吉生命热线 电话号码：0433-273-9595 （8:00-16:00）
            <br />
            青岛市心理危机干预中心自杀干预热线
            电话号码：86669120（8:30-11:00/13:30-16:00）
          </p>
        </div>
        <div id="usa" className="section">
          <h1 className="title">美国</h1>
          <p className="description">
            <p className="description--bold">国家预防自杀生命热线</p>
            <br />
            <a
              className="link"
              href="HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG"
              target="_blank"
            >
              HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG
            </a>
            <br /> 电话：
            <span className="description--bold">1 800 273 (8255)</span> <br />
            Text TALK to 741741 to text with a trained crisis counselor from the
            Crisis Text Line for free, 24/7 Lifeline Crisis Chat
          </p>
          <br />
          <br />
          <p className="description">
            <p className="description--bold">Lifeline Crisis Chat</p>

            <a
              className="link"
              href="http://www.suicidepreventionlifeline.org/gethelp/lifelinechat.aspx"
              target="_blank"
            >
              http://www.suicidepreventionlifeline.org/gethelp/lifelinechat.aspx
            </a>
          </p>{" "}
          <br />
          <br />
          <p className="description">
            <span className="description--bold">退役军人求助专线</span>
            （现役美国军人、退役军人和其家人）
            <br />
            <a
              href="http://www.veteranscrisisline.net"
              className="link"
              target="_blank"
            >
              http://www.veteranscrisisline.net
            </a>{" "}
            <br />
            电话：<span className="description--bold">1 800 273 8255</span>{" "}
            简讯：<span className="description--bold">838255</span>
          </p>{" "}
          <br />
          <br />
          <p className="description">
            <span className="description--bold"> The Trevor Project </span>
            （帮助同性恋青少年、朋友和家庭成员）
            <br />{" "}
            <a
              href="http://www.thetrevorproject.org"
              className="link"
              target="_blank"
            >
              http://www.thetrevorproject.org
            </a>{" "}
            <br />
            电话： <span className="description--bold">1 866 488 73865</span>
          </p>
        </div>
        <div id="canada" className="section">
          <h1 className="title">加拿大</h1>
          <p className="description">
            儿童求助热线（适合未满 20 岁的青少年） <br />
            电话： <span className="description--bold">1 800 6686868</span>{" "}
            <br />
            若年满 20 岁，请联络您所在地区的自杀危机处理中心：
            <br />
            <a
              className="link"
              href="http://suicideprevention.ca/thinking-aboutsuicide/find-a-crisis-centre"
              target="_blank"
            >
              http://suicideprevention.ca/thinking-aboutsuicide/find-a-crisis-centre
            </a>
          </p>
        </div>
        <div id="uk" className="section">
          <h1 className="title">英国</h1>
          <p className="description">
            <p className="description--bold">撒玛利亚会</p>
            <br />{" "}
            <a
              href="http://www.samaritans.org"
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
          </p>
        </div>
        <div id="australia" className="section">
          <h1 className="title">澳大利亚</h1>
          <p className="description">
            <p className="description--bold">澳大利亚生命热线</p> <br />
            <a
              href="http://www.lifeline.org.au"
              className="link"
              target="_blank"
            >
              http://www.lifeline.org.au
            </a>{" "}
            <br />
            电话：<span className="description--bold">13 11 14</span>
          </p>
          <br />
          <br />
          <p className="description">
            <p className="description--bold">儿童求助热线</p> <br />
            <a
              className="link"
              href="http://www.kidshelp.com.au"
              target="_blank"
            >
              http://www.kidshelp.com.au
            </a>{" "}
            <br />
            电话：<span className="description--bold">1800 55 1800</span>
          </p>
          <br />
          <br />
          <p className="description">
            <p className="description--bold">Headspace</p> <br />
            <a
              href="http://www.eheadspace.org.au"
              className="link"
              target="_blank"
            >
              http://www.eheadspace.org.au
            </a>{" "}
            <br />
            电话： <span className="description--bold">1800 650 890</span>
          </p>
        </div>
        <div id="others" className="section">
          <h1 className="title">其他国家</h1>
        </div>
      </Content>
    </Container>
  );
}
