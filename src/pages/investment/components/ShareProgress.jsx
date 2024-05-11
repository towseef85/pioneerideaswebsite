import React from "react";
import { localise } from "../../../utils/localize";

export default function ShareProgress({ data }) {
  console.log("share", data);
  return (
    <div className="tp-service-area-two p-relative grey-bg pt-125 pb-145 z-index-1 mt-20">
      <div className="container mt-15">
        <div className="col-xl-12">
          <div className="tp-service-section-box-two text-center">
            <h5 className="tp-subtitle pb-10">
              {localise(data.progressbartitle, data.progreestitlearb)}
            </h5>
          </div>
        </div>
        <div className="progress">
          <divs
            className={`progress-bar theme-bg`}
            role="progressbar"
            style={{
              width: `${data.progressbarvalue}%`,
            }}
            aria-valuenow={data.progressbarvalue}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {data.progressbarvalue}%{" "}
            {localise(
              data.progressbardescription,
              data.progressbardescriptionarb
            )}
          </divs>
        </div>
      </div>
    </div>
  );
}
