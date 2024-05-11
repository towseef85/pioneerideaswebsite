import React from "react";
import bgnew from "../assets/img/news/news-bg.jpg";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div
      className="tp-news-letter-area tp-news-letter-bg pt-200 pb-150"
      style={{ backgroundImage: `url(${bgnew})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 ">
            <div className="tp-news-sub-wrapper text-center">
              <div className="tp-news-letter-section-box">
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">
                  Have more questions
                </h2>
                <p className="text-white pb-35">
                  We value your time get in touch our sales executive will
                  connect with you.
                </p>
              </div>
              <div className="tp-news-button">
                <Link to="/contact">
                  <a className="tp-btn-lg-yellow">Get In Touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
