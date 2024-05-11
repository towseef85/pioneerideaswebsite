import React from "react";
import { Link } from "react-router-dom";
import { localise } from "../utils/localize";

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className="acfeature mb-50">
        <div
          className={`ac-circle ${color ? `ac-cirle-color-${color}` : ""}`}
        ></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="#">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Investmentsection({ content }) {
  const steps = content.investmentsteps.sort(
    (a, b) => a.fields.rank - b.fields.rank
  );
  return (
    <div className="ac-feature-area">
      <div className="container">
        <div className="row ac-feature-space">
          <div className="col-xl-6 col-lg-6">
            <div className="ac-feature-left">
              <h3 className="ac-feature-title">
                {localise(content.investmenthead, content.investmentheadarb)}
              </h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ac-feature-right">
              <p className="pb-25">
                {localise(
                  content.investmentheaddescription,
                  content.investmentheaddescriptionarb
                )}
              </p>
              {/* <p>{sm_desc_2}</p> */}
            </div>
          </div>
        </div>
        <div className="ac-feature-border-top">
          <div className="row">
            {steps.map((x, i) => (
              <FeatureItem
                key={i}
                color={`${i + 1}`}
                title={localise(x.fields.title, x.fields.titlearb)}
                subtitle={localise(
                  x.fields.description,
                  x.fields.descriptionarb
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
