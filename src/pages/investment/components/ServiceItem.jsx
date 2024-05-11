import React from "react";
import { localise } from "../../../utils/localize";
import { Link } from "react-router-dom";

export default function ServiceItem({ service, index, m }) {
  const delay = ".8s";
  const duration = ".5s";
  const { icon, title, titlearab, description, descriptionarabic } =
    service || {};
  return (
    <div className="col-xl-3 col-md-6">
      <div
        className={`tp-services-item text-center 
     ${index && index > 2 ? "mb-30" : ""} ${m ? "mb-30" : ""} wow tpfadeUp`}
        data-wow-duration={duration}
        data-wow-delay={delay}
      >
        <div className="tp-services-item__icon mb-35">
          <img src={icon.fields.file.url} alt="" />
        </div>
        <div className="tp-services-item__content">
          <h5 className="tp-sv-title">
            <Link to="#">
              <a>{localise(title, titlearab)}</a>
            </Link>
          </h5>
          <p>{localise(description, descriptionarabic)}</p>
        </div>
      </div>
    </div>
  );
}
