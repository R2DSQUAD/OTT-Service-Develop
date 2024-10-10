import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { signOutFn } from "../../slice/authSlice";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSignIn = useSelector(state => state.auth.isSignIn)
  const signInUser = useSelector(state => state.auth.signInUser)

  console.log(isSignIn)
  console.log(signInUser, "유저정보")
  



  return (
    <div className="header">
      <div className="header-con">
        <div className="gnb">
          <ul>
            <li>
              <Link to={"/cart"}>장바구니</Link>
            </li>
            <li>
              {isSignIn ?
              <Link onClick={(e) => {
                e.preventDefault()
                alert('로그아웃 되었습니다. ')
                dispatch(signOutFn())
                navigate('/')
              }}>로그아웃</Link>:
              <Link to={"/signIn"}>로그인</Link>
              }
            </li>
            {!isSignIn && 
            <li>
              <Link to={"/signUp"}>회원가입</Link>
            </li>
            }
            {isSignIn ? 
            <li>
              <Link to={"/member"}>{signInUser[0].userEmail}님</Link>
            </li>:
            <></>
            }
            {isSignIn ? 
            (signInUser[0].role === "ROLE_ADMIN" ?
              <li>
                <Link onClick={(e) => {
                  e.preventDefault()
                  navigate('/admin/index')
                }}>관리자 페이지</Link>
              </li> : <></>
            ) :
            <></>
            }
            

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
