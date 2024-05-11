import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo/p_logo.png";
import { useLanguage } from "../context/LanguageContext";
import { translate } from "../utils/translate";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menu_data = [
    {
      id: 1,
      mega_menu: false,
      has_dropdown: false,
      title: translate("main"),
      link: "/",
    },
    {
      id: 2,
      mega_menu: false,
      has_dropdown: false,
      title: translate("whoweare"),
      link: "/whoweare",
    },
    {
      id: 3,
      mega_menu: false,
      has_dropdown: false,
      title: translate("investment"),
      link: "/investment",
    },
    {
      id: 4,
      mega_menu: false,
      has_dropdown: true,
      title: translate("more"),
      link: "#",
      sub_menus: [
        { link: "/faq", title: translate("faq") },
        { link: "/news", title: translate("news") },
      ],
    },
    {
      id: 5,
      mega_menu: false,
      has_dropdown: false,
      title: translate("connect"),
      link: "/contact",
    },
  ];
  const { handleDirChange } = useLanguage();
  const [navTitle, setNavTitle] = useState("");
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link to="/">
              <a>
                <img src={logo} alt="" />
              </a>
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>Pioneer Ideas</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li
                    key={i}
                    className={
                      !menu.has_dropdown
                        ? ""
                        : navTitle === menu?.title
                        ? "has-droupdown active"
                        : "has-droupdown"
                    }
                  >
                    {menu.has_dropdown && (
                      <button onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}{" "}
                      </button>
                    )}
                    <ul
                      className={
                        navTitle === menu?.title
                          ? "sub-menu active"
                          : "sub-menu"
                      }
                    >
                      {menu?.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link to={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && (
                      <Link to={menu.link}>{menu.title}</Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link to="#">
                    <button
                      style={{ padding: "0px 10px" }}
                      onClick={() => handleDirChange("en")}
                    >
                      ENG
                    </button>
                    /
                    <button
                      style={{ padding: "0px 10px" }}
                      onClick={() => handleDirChange("ar")}
                    >
                      العربية
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a
                  to="https://goo.gl/maps/abHegV4AoiJA6Syd8"
                  rel="noreferrer"
                  target="_blank"
                >
                  {translate("address")}
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a to="tel:8180012345678">{translate("phone")}</a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a to="mailto:info@pioneersidea.com">{translate("email")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}
      ></div>
      {/* overlay end */}
    </>
  );
}
