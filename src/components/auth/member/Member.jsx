import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom/dist'




const Member = () => {

  const [paymentData, setPaymentData] = useState([]);

  useEffect(()=> {
    const AxiosFn = async (e) => {
      try {
        const res=await axios.get('http://localhost:3001/payments')
        const resData = res.data;
        setPaymentData(resData)
      } catch (err) {
        alert(err);
      }
    };
    AxiosFn();
  },[])


  

  const navigate = useNavigate()
  const signInUser = useSelector(state => state.auth.signInUser)


  return (
    <>
      <div className="member-index">
        <div className="member-index-con">
          {signInUser.length > 0 && 
            <div className="member-index-header">
              <div className="image-box">
                <img src="" alt="image" />
              </div>
              <div className="member-index-data">
                <h1>{signInUser[0].userName}님</h1>

                <div className="buttons">
                  <button onClick={() => {
                    navigate('/member/update')
                  }}>회원정보수정</button>
                  <button>프로필 변경</button>
                  <button onClick={() => {
                    navigate(-1)
                  }}>뒤로가기</button>
                </div>
              </div>
              <div className="member-datas">
                <ul>
                  <li>이름: {signInUser[0].userName}</li>
                  <li>이메일: {signInUser[0].userEmail}</li>
                  <li>비밀번호: {signInUser[0].userPw}</li>           
                  <li>전화번호: {signInUser[0].phoneNumber}</li>           
                  <li>주소: {signInUser[0].address}</li>           
                  <li>권한: {signInUser[0].role}</li>           
                  </ul>
              </div>
            </div>
          }
          {signInUser.length > 0 &&
          <div className="member-index-container">
            <div className="member-index-container-con">
              <div className="storage-box">
                <div className="top">
                  <h2>내보관함</h2>

                  <div className="top-buttons">
                    <span>내가 찜한 목록</span>
                    <span>|</span>
                    <span>최근 확인한 작품</span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom-con">
                    
                  </div>
                </div>
              </div>

            </div>
          </div>

          }






          {/* <div className="member-wrap">
            {signInUser.length > 0 && 
            <>
              <h1>{signInUser[0].userEmail}님</h1>
              <div className="user-data">
                <ul>
                  <li>이름: {signInUser[0].userName}</li>
                  <li>이메일: {signInUser[0].userEmail}</li>
                  <li>비밀번호: {signInUser[0].userPw}</li>           
                  <li>전화번호: {signInUser[0].phoneNumber}</li>           
                  <li>주소: {signInUser[0].address}</li>           
                  <li>권한: {signInUser[0].role}</li>           
                </ul>
              </div>
              <div className="member-payment">
                <h1>결제 내역</h1>
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Member