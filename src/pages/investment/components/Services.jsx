import React from "react";
import { localise } from "../../../utils/localize";
import ServiceItem from "./ServiceItem";

export default function Services({ data }) {
  const services = data.services;
  return (
    <div className="tp-service-area pt-125 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-section-box text-center pb-35">
              <h5 className="tp-subtitle">
                {localise(data.subtitle, data.subtitlearb)}
              </h5>
              <svg
                width="290"
                height="11"
                viewBox="0 0 290 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path d="M0 0L290 11H0V0Z" fill="#FFDC60" />
              </svg>
              <h5 className="tp-title">
                <span className="tp-section-highlight">
                  <p> {localise(data.description, data.descriptionarb)}</p>
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="row gx-17">
          {services.map((ser, i) => {
            return <ServiceItem key={i} service={ser.fields} m={true} />;
          })}
        </div>
      </div>
    </div>
  );
}
