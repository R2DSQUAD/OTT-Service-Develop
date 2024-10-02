import React, { useState } from 'react'

const signUpData = {
  userName: "",
  userEmail: "",
  userPw: "",
  phoneNumber: "",
  role: "Role_MEMBER"
} 

const SignUpIndex = () => {

  const [signUp, setSignUp] = useState(signUpData)

  const onSignUpChangeFn = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    setSignUp({
      ...signUp,
      [name]: value
    })

    console.log(e.target.value)
  }



  return (
    <div className="signUp">
      <div className="signUp-con">
        <h1>회원가입</h1>
        <ul>
          <li>
            <input type="text" name="userName" id="userName" placeholder='이름' onChange={onSignUpChangeFn} value={signUp.userName}/>
          </li>
          <li>
            <input type="text" name="userEmail" id="userEmail" placeholder='이메일' onChange={onSignUpChangeFn} value={signUp.userEmail}/>
          </li>
          <li>
            <input type="password" name="userPw" id="userPw" placeholder='비밀번호' onChange={onSignUpChangeFn} value={signUp.userPw}/>
          </li>
          <li>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder='전화번호' onChange={onSignUpChangeFn} value={signUp.phoneNumber}/>
          </li>
          <li>
            <input type="checkbox" name="agree" id="agree"></input>
            <label htmlFor="agree">전체 약관에 동의합니다.</label>
          </li>
          <li>
            <input type="checkbox" name="privacy" id="privacy"></input>
            <label htmlFor="privacy">개인정보 수집.</label>
          </li>
          <li>
            <input type="checkbox" name="service" id="service"></input>
            <label htmlFor="service">서비스 이용 약관.</label>
          </li>
          <li>
            <input type="checkbox" name="admmin" id="admin" value={"ROLE_ADMIN"}></input>
            <label htmlFor="admin">관리자로 가입</label>
          </li>
          <li>
            <button>가입하기</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SignUpIndex