import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom/dist'
import { signInUserFn } from '../../../slice/authSlice'

const signInData = {
  userEmail: '',
  userPw: ''
}


const SignInIndex = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signIn, setSetSignIn] = useState(signInData)
  const signInUser = useSelector(state => state.auth.signInUser)

  const onSignInChangeFn = (e) => {
    const name = e.target.name
    const value = e.target.value

    setSetSignIn({
      ...signIn,
      [name]: value

    })
    console.log(name, value)
  }

  const onSignInFn = () => {

    // 미입력시 알림창
    let escapeReturn = false
    Object.values(signIn).forEach(el => {
      if (el === null || el === "") {
        escapeReturn = true
        return
      }
    })
    if (escapeReturn) {
      alert('정보를 입력해주세요')
      return
    }
    // 미입력시 알림창

    const SignInAxiosFn = async () => {
      const res = await axios.get('http://localhost:3002/members')
      const num = res.data.findIndex(el => {
        return el.userEmail === signIn.userEmail && el.userPw === signIn.userPw
      })
      const userDataGet = res.data[num]

      if (num !== -1) {
        alert('로그인 성공!')
        dispatch(signInUserFn(userDataGet))
  
        if (userDataGet.role === "ROLE_ADMIN") {
          alert('관리자 페이지로 이동합니다.')
          navigate('/admin')
        } else {
          navigate('/')
        }
  
      } else {
        alert('로그인 실패 다시 입력해주세요')
        return
      }
    }
    SignInAxiosFn()
  }

  return (
    <div className="signIn">



      <div className="signIn-con">
        <div className="signIn-form">
          <ul>
            <h1>로그인</h1>
            <li className='main-list'>
                <input onChange={onSignInChangeFn} type="text" name="userEmail" id="userEmail" placeholder='이메일' value={signIn.userEmail}/>
            </li>
            <li className='main-list'>
                <input onChange={onSignInChangeFn} type="password" name="userPw" id="userPw" placeholder='비밀번호' value={signIn.userPw}/>
            </li>
            <li>
              <button onClick={onSignInFn}>로그인</button>
            </li>
            <li>
              회원이 아니신가요? <br/>
              지금 회원가입하세요
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SignInIndex