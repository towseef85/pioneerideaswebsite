import React from "react";
import { localise } from "../../../utils/localize";
import Brands from "./Brands";
export default function BrandArea({ data }) {
  return (
    <div className="tp-brand-area pt-135 grey-bg pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-section text-center pb-60">
              <h4 className="tp-brand-title">
                {localise(data.brandtitle, data.brandtitlearb)}
              </h4>
              <p className="text-center">
                {localise(data.branddescription, data.branddescriptionarb)}
              </p>
            </div>
          </div>
        </div>
        <div className="tp-brand-slider-section">
          <div className="swiper-container brand-slider-active">
            <Brands data={data.brangimages} />
          </div>
        </div>
      </div>
    </div>
  );
}
