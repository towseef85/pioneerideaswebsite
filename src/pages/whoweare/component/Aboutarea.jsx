import React from "react";
import { localise } from "../../../utils/localize";
import about_img from "../../../assets/img/breadcrum/ab-1.2.jpg";
import client_icon from "../../../assets/img/about/testi-7.png";

export default function Aboutarea({ content }) {
  return (
    <div className="ac-about-content-area pt-130">
      <div className="container">
        <div className="ac-border-bottom ac-bottom-space">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="ac-about-left">
                <h3 className="ac-ab-title">
                  <a href="#">{localise(content.title, content.titlearb)}</a>
                </h3>
                {/* <div className="ac-play-button">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="popup-video"
                >
                  <i className="far fa-play"></i>
                </button>
                <span>{video_title}</span>
              </div> */}
              </div>
            </div>
            <div
              className="col-xl- col-lg-6 wow tpfadeRight"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <div className="ac-about-right">
                <p className="pb-25">
                  {localise(content.description, content.descriptionarb)}
                </p>
                {/* <p>{right_text_2}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row ac-testimonial-space">
          <div
            className="col-xl-6 col-lg-6 wow tpfadeLeft"
            data-wow-duration=".3s"
            data-wow-delay=".5s"
          >
            <div className="ac-testimonial-info">
              <div className="actestimonial">
                <div className="actestimonial__icon">
                  <img src={client_icon} alt="" />
                </div>
                <div className="actestimonial__position">
                  <h4 className="ac-client-name">
                    <a href="#">
                      {localise(content.ceoname, content.ceonamearb)}
                    </a>
                  </h4>
                  <span>
                    {localise(content.ceoposition, content.ceopositionarb)}
                  </span>
                </div>
                <div className="actestimonial__paragraph">
                  <p>
                    {" "}
                    <span>
                      <i className="fas fa-quote-right"></i>
                    </span>
                    {localise(content.ceodetails, content.ceodetailsarb)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="ac-testimonial-right">
              <img src={about_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
