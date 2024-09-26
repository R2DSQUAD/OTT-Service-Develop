import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-con">
        <div className="gnb">
          <ul>
            <li>
              <Link to={"/"}>장바구니</Link>
            </li>
            <li>
              <Link to={"/"}>로그인</Link>
            </li>
            <li>
              <Link to={"/"}>회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
