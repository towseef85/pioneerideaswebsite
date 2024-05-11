import React from "react";
import { Link } from "react-router-dom";
import hero2 from "../../../assets/img/hero/hero-2.png";
import spring from "../../../assets/img/hero/Spiral.png";
import shape1 from "../../../assets/img/hero/shape-1.png";
import { localise } from "../../../utils/localize";

const social_links = [
  {
    id: 1,
    icon: "fab fa-facebook-f social-icon-1",
    title: "Facebook",
    link: "http://facebook.com",
  },
  {
    id: 3,
    icon: "fab fa-youtube social-icon-3",
    title: "Youtube",
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    icon: "fab fa-twitter social-icon-2",
    title: "Twitter",
    link: "http://twitter.com",
  },
  {
    id: 4,
    icon: "fab fa-behance social-icon-4",
    title: "Behance",
    link: "https://www.behance.net/",
  },
];

export default function HeroArea({ data: bannerdata }) {
  console.log("home data", bannerdata);
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        <div className="shape-circle-blue"></div>
        <div className="shape-one">
          <img src={shape1} alt="" />
        </div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2
                    className="tp-hero-title wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    {localise(bannerdata.title, bannerdata.titleArb)}
                  </h2>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    {localise(bannerdata.textEng, bannerdata.textArb)}
                  </p>
                  <div
                    className="tp-hero-button mb-140 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link to="#">
                      <a className="tp-btn mr-30">
                        {localise(
                          bannerdata.btnText1Eng,
                          bannerdata.btnText1Arb
                        )}
                      </a>
                    </Link>
                    <Link to="#">
                      <a className="tp-btn-grey">
                        {localise(
                          bannerdata.btnText2Eng,
                          bannerdata.btnText2Arb
                        )}
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div
                    className="tp-hero-social pb-30 wow tpfadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay="1.2s"
                  >
                    <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a
                          key={i}
                          className={`social-icon-${l.id}`}
                          href={l.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={l.icon}></i>
                          <span>{l.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div
                className="tp-hero-big-img wow fadeInRight"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                <img src={hero2} alt="" />
                <div className="shape-two">
                  <img src={spring} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
