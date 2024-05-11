import React from "react";
import { Link } from "react-router-dom";
import CopyrightArea from "./CopyrightArea";
import { translate } from "../utils/translate";
import logo from "../assets/img/logo/p_logo.png";

const footer_contents = {
  logo: logo,

  footer_widgets: [
    {
      w_class: "d-flex justify-content-lg-center",
      title: "importantlinks",
      widget_lists: [
        { title: "main", to: "/" },
        { title: "whoweare", to: "/whoweare" },
        { title: "investment", to: "/investment" },
        { title: "faq", to: "/faq" },
        { title: "news", to: "/news" },
        { title: "connect", to: "/contact" },
      ],
    },
    {
      padd: "pl-20",
      title: "contactinfo",
      widget_lists: [
        { title: "address", to: "" },
        { title: "tel", to: "" },
        { title: "mobile", to: "" },
        { title: "email", to: "" },
      ],
    },
  ],
  subscribe_title: "Subscribe Newsletter",
  subscribe_text: "Subscribe to get latest updates on Investment Options",
  copy_right_text: (
    <>
      © Copyright ©{new Date().getFullYear()} Pioneer Ideas. All Rights Reserved
      Copyright
    </>
  ),
  conditions: ["investment", "connect", "Login / Signup"],
};

export default function Footer({ home_four = false }) {
  const { conditions, copy_right_text, footer_widgets, logo } = footer_contents;
  return (
    <footer>
      <div className="tp-footer-area black-bg pt-50 pb-10">
        <div className="container">
          <div
            className="row wow tpfadeUp"
            data-wow-duration=".3s"
            data-wow-delay=".5s"
          >
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-footer-widget">
                {!home_four && (
                  <div className="tp-footer-widget__logo mb-30">
                    <Link href="/">
                      <a>
                        <img src={logo} alt="" />
                      </a>
                    </Link>
                  </div>
                )}

                <div className="tp-footer-widget__text mb-30">
                  <p>{translate("footerdescription")}</p>
                </div>
                <div className="tp-footer-widget__social-link">
                  {/* <SocialLinks /> */}
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => {
              const { title, widget_lists, w_class, padd } = w;
              return (
                <div
                  key={i}
                  className={`col-xl-3 col-lg-2 col-md-6 ${
                    w_class ? w_class : ""
                  }`}
                >
                  <div className={`tp-footer-widget ${padd ? padd : ""}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{translate(title)}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {widget_lists.map((l, i) => (
                          <li key={i}>
                            <Link to={l.to}>{translate(l.title)}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CopyrightArea start */}
        <CopyrightArea
          copy_right_text={copy_right_text}
          conditions={conditions}
        />
        {/* CopyrightArea end */}
      </div>
    </footer>
  );
}
