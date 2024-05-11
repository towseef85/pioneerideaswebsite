import React from "react";
import { localise } from "../utils/localize";
import { Link } from "react-router-dom";

export default function Services({ data, maindata }) {
  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box-two text-center">
                <h5 className="tp-subtitle pb-10">
                  {localise(maindata.messagehead, maindata.messageheadarb)}
                </h5>
                <h2 className="tp-title tp-white-text pb-35">
                  {localise(maindata.messagetitle, maindata.messagetitlearb)}{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-12">
            {data.map((ser) => {
              const { delay, duration, id, img, text_1, title, color } = ser;
              //"icon", ser.fields.icon?.fields.file.url;
              return (
                <div
                  key={id}
                  className="col-xl-4  col-lg-4 col-md-6 wow tpfadeUp"
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-item-two ${color} mb-30`}>
                    <div className="tp-sv-img mb-40">
                      <img src={ser.fields.icon?.fields.file.url} alt="" />
                    </div>
                    <div className="tp-sv-content-tow">
                      <h3 className="tp-sv-product-design">
                        {localise(ser.fields.title, ser.fields.titlearb)}
                      </h3>
                      <p>
                        {localise(
                          ser.fields.description.content[0].content[0].value,
                          ser.fields.descriptionarb.content[0].content[0].value
                        )}
                      </p>
                    </div>
                    {/* <div className="tp-sv-icon-two">
                      <Link to="#">
                        <a>
                          <i className="fas fa-long-arrow-up"></i>
                        </a>
                      </Link>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
