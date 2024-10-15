import React from "react";
import HeaderNav from "../../components/common/HeaderNav";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";

const DefaultLayout = () => {
  return (
    <>
      <div className="layout">
        <div className="left">
          <HeaderNav />
        </div>
        <div className="right">
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="layout2">
        <div className="top">
          <Header />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="bottom">
          <HeaderNav />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
