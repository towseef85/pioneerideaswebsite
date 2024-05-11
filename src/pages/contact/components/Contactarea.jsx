import React from "react";
import { translate } from "../../../utils/translate";
import { localise } from "../../../utils/localize";
import c1 from "../../../assets/img/contact/contact-1.jpg";
import ContactForm from "./ContactForm";

export default function Contactarea({ data }) {
  return (
    <div className="tp-contact-area pt-135 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 ">
            <div className="tp-contct-wrapper contact-space-40">
              <div className="tp-contact-thumb mb-60">
                <img src={c1} alt="" />
              </div>
              <div className="tp-contact-info mb-40">
                <h4 className="contact-title">{translate("mailaddress")}</h4>
                <span>
                  <a href="mailto:(info@pioneersidea.com)">
                    {data.mailaddress}
                  </a>
                </span>
              </div>
              <div className="tp-contact-info mb-40">
                <h4 className="contact-title">{translate("contactnumber")}</h4>
                <span>
                  <a href="tel:(+966 555 632 627)">{data.contactnumbers}</a>
                </span>
              </div>
              <div className="tp-contact-info">
                <h4 className="contact-title">{translate("officeaddress")}</h4>
                <span>
                  <a href="https://www.google.com/maps" target="blank">
                    {localise(data.address, data.addressarabic)}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tpcontact">
              <h4 className="tp-contact-big-title">
                {localise(data.subtitle, data.subtitlearb)}
              </h4>
              <div className="tpcontact__form tpcontact__form-3">
                {/* ContactForm start */}
                <ContactForm />
                {/* ContactForm end */}
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
