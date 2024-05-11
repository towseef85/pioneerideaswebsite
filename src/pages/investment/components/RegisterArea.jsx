import React from "react";
import { localise } from "../../../utils/localize";
import RegisterForm from "./RegisterForm";
import { translate } from "../../../utils/translate";
import j1 from "../../../assets/img/job/job-1.jpg";

export default function RegisterArea({ data }) {
  return (
    <div className="tp-login-area">
      <div className="container-fluid p-2">
        <div className="row gx-0 align-items-center">
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="tp-login-thumb login-space  d-flex justify-content-center h-100">
              <div
                className="jobdetails__paragraph "
                style={{ paddingLeft: "10%" }}
              >
                <div className="jobdetails__subtitle">
                  <h2>{localise(data.subtitle, data.subtitlearb)}</h2>
                </div>
                <div className="jobdetails__img">
                  <img src={j1} alt="" />
                </div>
                <div className="jobdetails__title">
                  <h4 className="job-title pb-20">
                    {localise(data.subtitle, data.subtitlearb)}
                  </h4>
                </div>
                <p className="mb-30">
                  {localise(
                    data.whyinvestdescription,
                    data.whyinvestdescriptionarb
                  )}
                </p>
              </div>
              {/* <img className='h-100' src="/assets/img/contact/login.png" alt="" /> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="tp-login-wrapper d-flex justify-content-center">
              <div className="tplogin">
                <div className="tplogin__title">
                  <h3 className="tp-login-title">
                    {translate("investmentform")}
                  </h3>
                </div>
                <div className="tplogin__form">
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
