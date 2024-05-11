import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translate } from "../utils/translate";

export default function NavMenus() {
  const { handleDirChange } = useLanguage();
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
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`${menu.has_dropdown ? "has-dropdown" : ""}
    ${menu.mega_menu ? "has-mega-menu" : ""}`}
        >
          <Link to={menu.link}>
            {menu.title}
            {menu.has_dropdown && <i className="fal fa-angle-down"></i>}
          </Link>
          {menu.has_dropdown && (
            <ul className="submenu text-start">
              {menu.sub_menus.map((sub_m, i) => (
                <li key={i}>
                  <Link to={sub_m.link}>{sub_m.title}</Link>
                </li>
              ))}
            </ul>
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
  );
}
