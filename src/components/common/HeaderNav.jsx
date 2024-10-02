import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="headerNav">
      <div className="headerNav-con">
        <h1 className="logo">
          <Link to={"/"}><img src="/images/common/logo.svg" alt="logo" /></Link>
        </h1>
        <div className="gnb">
          <ul>
            <li>
              <Link to={"/"}>영화</Link>
            </li>
            <li>
              <Link to={"/drama"}>드라마</Link>
            </li>
            <li>
              <Link to={"/"}>애니메이션</Link>
            </li>
            <li>
              <Link to={"/webtoon"}>웹툰</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
