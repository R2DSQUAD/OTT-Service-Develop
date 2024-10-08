import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom/dist'


const Member = () => {
  const navigate = useNavigate()
  const signInUser = useSelector(state => state.auth.signInUser)

  return (
    <>
      <div className="member">
        <div className="member-con">
          <div className="member-wrap">
            {signInUser.length > 0 && 
            <>
              <h1>{signInUser[0].userEmail}님</h1>
              <div className="user-data">
                <ul>
                  <li>이름: {signInUser[0].userName}</li>
                  <li>이메일: {signInUser[0].userEmail}</li>
                  <li>비밀번호: {signInUser[0].userPw}</li>           
                  <li>전화번호: {signInUser[0].phoneNumber}</li>           
                  <li>권한: {signInUser[0].role}</li>           
                </ul>
              </div>
              <div className="member-btn">
                <button onClick={() => {
                  navigate('/member/update')
                }}>회원정보수정</button>
                <button onClick={() => {
                  navigate(-1)
                }}>뒤로가기</button>
              </div>
            </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Member