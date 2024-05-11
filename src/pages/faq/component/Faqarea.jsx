import React from "react";
import { localise } from "../../../utils/localize";

export default function Faqarea({ questions }) {
  return (
    <div className="sd-accordio-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-custom-accordio faq-accordio-border">
              <div className="accordion" id="accordionExample">
                {questions.map((item, i) => {
                  const {
                    question,
                    answer,
                    questionArabic,
                    answerarabic,
                    show = i === 0 ? true : null,
                  } = item.fields;
                  return (
                    <div key={i} className="accordion-items">
                      <h2 className="accordion-header" id={`heading-${i}`}>
                        <button
                          className={`accordion-buttons ${
                            show ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${i}`}
                          aria-expanded={show ? "true" : "false"}
                          aria-controls={`collapse-${i}`}
                        >
                          {localise(question, questionArabic)}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${i}`}
                        className={`accordion-collapse collapse ${
                          show ? "show" : ""
                        }`}
                        aria-labelledby={`heading-${i}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {localise(answer, answerarabic)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
