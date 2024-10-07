import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-con">
        <div className="gnb">
          <ul>
            <li>
              <Link to={"/cart"}>장바구니</Link>
            </li>
            <li>
              <Link to={"/signIn"}>로그인</Link>
            </li>
            <li>
              <Link to={"/signUp"}>회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
