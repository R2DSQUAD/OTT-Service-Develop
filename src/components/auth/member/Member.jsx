import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom/dist'
import { animeDataFn } from '../../../slice/animeSlice';




const Member = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signInUser = useSelector(state => state.auth.signInUser)

  const animeData = useSelector(state => state.anime.animeData)
  const recent = useSelector(state => state.anime.recent)

  const [recentItem,setRecentItem] = useState([])

  const [recentDelete, setRecentDelete] = useState(false)

  
  useEffect(()=> {
    dispatch(animeDataFn())
    const axiosRecent = async () => {
      try{
        const itemId = {
          recent: recent.itemIdArr 
        }
        const categoryUp = await axios.patch(`http://localhost:3001/members/${signInUser[0].id}`, itemId)
        
        const res = await axios.get(`http://localhost:3001/members/${signInUser[0].id}`)

        setRecentItem(res.data.recent)
      } catch(err) {
        alert(err)
      }
    }
    axiosRecent()
  },[])
  
  

  const recentArr = animeData.filter(el => recentItem.includes(el.id))



  const onTrashButton = () => {
    if (!recentDelete) {
      setRecentDelete(true)
    } else {
      setRecentDelete(false)
    }
  }

  return (
    <>
      <div className="member-index">
        <div className="member-index-con">

          <span className= 'span-back' onClick={() => {
            navigate(-1)
          }}>뒤로가기</span>

          {signInUser.length > 0 &&
          <>
            <div className="member-index-left" id='member-mobile'>
              <h3 className="member-title">회원정보</h3>

              <div className="profile-box">
                <div className="image-box">
                  <img src={`/images/common/profile.png`} alt="image" />
                </div>
                <h3>{signInUser[0].userName}님</h3>
                <span onClick={() => {
                  navigate('/member/update')
                }}>회원정보수정</span>
              </div>

              <ul className="member-index-buttons">
                <li>별점</li>
                <li>리뷰</li>
                <li>댓글</li>
              </ul>
              <div className="storage">
                <img src={`/images/common/storage.svg`} alt="storage" />
                보관함
              </div>
              
            </div>
            <div className="member-index-right">
              <h3>보관함</h3>
              <div className="member-nav">
                <ul>
                  <li>최근본</li>
                  <li>보고싶다</li>
                  <li>구매한</li>
                  <li>정주행</li>

                  <li onClick={onTrashButton}>
                    <div className="trash-icon">
                     <img src={`images/common/trash.svg`} alt="image" />
                    </div>
                    <span>삭제</span>
                    
                  </li>
                </ul>
              
                
              </div>
              <hr />
              <div className="member-index-right-con">
                <div className="right-bar">
                  {!recentDelete ?
                  <span>작품 ({recent.itemIdArr.length})</span> :
                  <span>선택 (0)</span>
                  }

                </div>
                <ul>
                  {recentArr.length > 0 &&
                  recentArr.map((el, idx) => {
                    return (
                      <li key={idx}>
                        <div className="image-box">
                          <div className="member-top">
                            <img src={`/images/itemData/${el.img}`} alt='image'></img>
                          </div>
                          <div className="member-bottom">
                            <span>{el.title}</span>
                          </div>
                        </div>
                      </li>
                    )
                  })
                  }
                </ul>
              </div>
            </div>
          </>
          
          }




          {/* {signInUser.length > 0 && 
            <div className="member-index-header">
              <div className='header-con'>
                <div className="image-box">
                  <img src="" alt="image" />
                  <input type="file" name="" id=""/>
                </div>
                <div className="member-index-button">
                  <h1>{signInUser[0].userName}님</h1>

                  <div className="buttons">
             
           
          
                  </div>
                </div>
                <div className="member-data">
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
            </div>
          }
          

          */}
        </div>
      </div>
    </>
  )
}

export default Member