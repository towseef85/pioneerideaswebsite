import React from "react";
import useSticky from "../hooks/useSticky";
import { Link } from "react-router-dom";
import NavMenus from "./NavMenus";
import logo from "../assets/img/logo/p_logo.png";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent pl-165 pr-165  
        ${headerSticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-logo">
                  <Link to="/">
                    <a>
                      <img src={logo} alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
