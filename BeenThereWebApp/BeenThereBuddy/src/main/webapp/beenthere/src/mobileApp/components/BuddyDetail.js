import React from "react";
import styled from "styled-components";
import style from "../global-style";

const Section = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  height: 145px;
  width: 335px;
  margin: 6px auto;
  padding: 20px;
  color: ${style["font-color-light-1"]};
  background-color: ${(props) =>
    props.colorChange
      ? props.colorChange.background
      : style["theme-color-primary"]};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.colorChange
        ? props.colorChange.hoverBackground
        : style["theme-color-primary-2"]};
  }
  &:hover .icon {
    path {
      fill: ${(props) =>
        props.colorChange ? props.colorChange.color : style["highlight-color"]};
    }
  }
  &:hover .appointment {
    color: ${(props) =>
      props.colorChange ? props.colorChange.color : style["highlight-color"]};
  }

  .appointment {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: ${style["font-size-m"]};
    display: flex;
    align-items: center;
  }
  .image {
    flex: 0 0 30%;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
  }
  .detail {
    flex: 0 0 70%;
    padding: 0 10px;
    text-align: left;
    line-height: ${style["line-height-m"]};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    font-weight: bold;
  }
  .name {
    color: ${(props) =>
      props.colorChange ? props.colorChange.color : style["highlight-color"]};
    font-size: ${style["font-size-m"]};

    display: flex;
    justify-content: space-between;
  }
  .info,
  .location {
    font-size: ${style["font-size-sm"]};
  }

  .icon {
    transition: color 0.2s;
  }
  .label {
    &--list {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
    }
    &--item {
      border-radius: 20px;
      background: white;
      font-size: ${style["font-size-ss"]};
      color: ${(props) =>
        props.colorChange ? props.colorChange.color : style["highlight-color"]};
      height: 12px;
      line-height: 12px;
      width: 45px;
      text-align: center;

      margin: 3px;
    }
  }
`;

function BuddyDetail(props) {
  const arrowIcon = (
    <svg
      t="1593744780656"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7211"
      width="25"
      height="25"
    >
      <path
        d="M755 416H160q-14 0-23-9t-9-23 9-23 23-9h595L521 119q-9-10-9-23t9.5-22.5T544 64t23 9l288 288q9 10 9 23t-9 23L567 695q-10 9-23 9t-22.5-9.5T512 672t9-23z"
        p-id="7212"
        fill="#D3D3D3"
      ></path>
    </svg>
  );
  const phoneIcon = (
    <svg
      t="1593986018768"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2717"
      width="28"
      height="28"
    >
      <path
        d="M154.408421 48.882526l-1.239579 1.024a54.298947 54.298947 0 0 0-1.374316 0.916211l-3.072 2.263579a36.648421 36.648421 0 0 0-7.626105 8.326737l-0.619789 1.050947-82.512843 82.566737c-100.459789 100.459789 15.225263 334.821053 251.418948 570.906947l16.922947 16.734316c228.567579 223.016421 451.718737 329.781895 550.184421 235.088842l87.471158-87.471158c49.717895-47.319579 51.712-126.922105 3.826526-177.232842l-10.186105-10.24-2.802526-2.506105-130.66779-103.882105c-50.122105-38.103579-122.287158-33.064421-167.208421 13.20421l-36.486736 36.513684-3.503158-2.209684a727.578947 727.578947 0 0 1-222.396632-222.504421l-3.018105-4.823579 34.681263-38.992842-0.592842 0.592842a127.002947 127.002947 0 0 0 8.677052-172.975158L334.955789 70.305684a129.212632 129.212632 0 0 0-180.547368-21.423158z m129.940211 61.709474l102.831157 129.347368c15.737263 21.665684 16.114526 49.960421 2.128843 71.302737l-2.048 2.829474-75.506527 84.938105 11.802948 20.237474a792.252632 792.252632 0 0 0 285.534315 285.642105l21.530948 12.557474 72.380631-72.434526 3.557053-3.395369a62.302316 62.302316 0 0 1 81.569684-1.185684l124.901053 99.301053 7.922526 7.895578a61.089684 61.089684 0 0 1-2.155789 86.366316l-87.578948 87.578948c-61.817263 59.445895-266.24-41.498947-476.133052-251.365053l-8.623158-8.677053C141.069474 453.389474 42.765474 251.715368 103.747368 190.787368L195.637895 98.789053l-1.455158 1.077894a64.538947 64.538947 0 0 1 90.165895 10.698106z"
        fill="#787878"
        p-id="2718"
      ></path>
    </svg>
  );
  const comingIcon = (
    <svg
      t="1594665475181"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2239"
      width="28"
      height="28"
    >
      <path
        d="M511.6802 0a511.6802 511.6802 0 1 0 511.6802 511.6802A511.6802 511.6802 0 0 0 511.6802 0z m38.558758 944.963683v-34.447042a38.650129 38.650129 0 1 0-77.208888 0v34.447042A435.293656 435.293656 0 0 1 79.036317 549.416615h33.259213a38.650129 38.650129 0 0 0 0-77.300259H79.21906a435.293656 435.293656 0 0 1 394.176496-392.897296v31.980012a38.650129 38.650129 0 1 0 77.208888 0V79.127688a435.293656 435.293656 0 0 1 394.176496 392.897296h-33.07647a38.650129 38.650129 0 0 0 0 77.300259h33.259213a435.293656 435.293656 0 0 1-394.359239 395.63844z"
        p-id="2240"
        fill="#787878"
      ></path>
      <path
        d="M742.210404 262.601588L513.324886 502.543053H511.6802a42.304988 42.304988 0 0 0-8.406175 0.822344l-191.880075-144.7324a28.964754 28.964754 0 0 0-34.812528 46.325333l191.880075 144.641028a43.401446 43.401446 0 0 0 86.71152-3.563488v-3.472115l228.428661-239.850094a28.964754 28.964754 0 0 0-41.939503-39.92933z"
        p-id="2241"
        fill="#787878"
      ></path>
    </svg>
  );
  const { colorChange } = props;

  const { id, name, info, region, desc, tag, service, avatar } = props;
  // const { handleClick } = props;
  return (
    <Section colorChange={colorChange}>
      {service === "ready" && (
        <div className="appointment">{phoneIcon} 可预约</div>
      )}
      {service === "coming" && (
        <div className="appointment">{comingIcon} &nbsp; 即将上线</div>
      )}
      <div className="image">
        <img src={`/avatars/${avatar}`} alt="buddy" />
      </div>
      <div className="detail">
        <div className="name">
          <span>{name.toUpperCase()}</span>
          <span> {arrowIcon}</span>
        </div>
        <div className="info">{info}</div>
        <div className="info">{desc}</div>
        <div className="location">坐标：{region}</div>
        <div className="label--list">
          {tag && tag.length !== 0
            ? tag
                .filter((item, index) => index < 3)
                .map((item, index) => (
                  <p className="label--item" key={index}>
                    {item}
                  </p>
                ))
            : null}
        </div>
      </div>
    </Section>
  );
}
export default React.memo(BuddyDetail);
