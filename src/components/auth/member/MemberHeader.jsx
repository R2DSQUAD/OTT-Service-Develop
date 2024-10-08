import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOutFn } from '../../../slice/authSlice'

const MemberHeader = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSignIn = useSelector(state => state.auth.isSignIn)
  const signInUser = useSelector(state => state.auth.signInUser)



  return (
    <div className="member-header">
      <div className="member-header-con">
        <h1 className="logo">
            <Link to={"/"}><img src="/images/common/logo.svg" alt="logo" /></Link>
        </h1>
        <div className="gnb">
          <ul>
            <li>
              <Link to={"/"}>장바구니</Link>
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
            <li>
              <Link to={"/signUp"}>회원가입</Link>
            </li>
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
  )
}

export default MemberHeader