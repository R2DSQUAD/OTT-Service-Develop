import React, { useEffect, useState } from 'react'
import AnimeModal from './AnimeModal'
import { useDispatch, useSelector } from 'react-redux'
import { dbDataFn } from '../../slice/animeSlice'



const AnimeIndex = () => {


  const dispatch = useDispatch()

  // db데이터 (전역처리)
  const dbData = useSelector(state => state.anime.dbData)

  // const [dbList, setDbList] = useState([])

  // DB에서 가져오기 
  useEffect(() => {
    dispatch(dbDataFn()) // db데이터 넣기
    // setDbList(dbData)
  },[])
  
  // console.log(dbData)
  // console.log(dbList)

  // 모달창 

  // 모달창 on/off state
  const [isAnimeModal, setIsAnimeModal] = useState(false) 
  // 상품 아이디 state
  const [itemId, setItemId] = useState() 
  
  // 상품 아이디 세팅 & 모달창 on
  const onAnimeModalFn = (e) => {
    const itemId = e.currentTarget.getAttribute('data-id');

    setItemId({
      id: itemId
    })

    setIsAnimeModal(true)
  }
  

  return (
    <>
      {isAnimeModal && <AnimeModal itemId={itemId} setIsAnimeModal={setIsAnimeModal}/>}  {/* 모달창 */}
      <div className="anime">
        <div className="anime-con">
          <div className="top-content">
            <h1>애니메이션</h1>
            <hr/>
          </div>
          <div className="bottom-content">
            <ul>
              {dbData && dbData.map((el, idx) => {
                if (el.type === "애니메이션") {
                  return(
                    // <li key={idx}>hey</li>
                    <>
                      {(idx+1)%4==0 && <h1 className={`ani-title${(idx+1)/4 - 4}`}>{el.subtitle}</h1>}  {/* 큰 제목 */}
                      <li key={idx} data-id={el.id} onClick={onAnimeModalFn}>
                        <div className="top">
                          <img src={`/images/itemData/${el.img}`} alt={el.img} />  {/* 이미지 */}
                        </div>
                        <div className="bottom">
                          <h3>{el.title}</h3> {/* 작품명 */}
                        </div>
                      </li>
                    </>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimeIndex