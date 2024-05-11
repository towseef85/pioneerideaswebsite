import React from "react";
import useSticky from "../hooks/useSticky";
import logo from "../assets/img/logo/p_logo.png";
import Sidebar from "./Sidebar";

export default function MobileMenu({ bg, transparent = true }) {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <>
      <div
        id="header-sticky-mobile"
        className={`tp-md-menu ${
          transparent ? "header-transparent" : ""
        } d-lg-none pt-40 pb-40 
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="bar text-end">
                <button
                  className="tp-menu-bar"
                  onClick={() => setSidebarOpen(true)}
                  type="button"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </>
  );
}
