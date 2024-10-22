import React, { useEffect, useState } from 'react'
import AnimeModal from './AnimeModal'
import { useDispatch, useSelector } from 'react-redux'
import { addRecentFn, animeDataFn, dbDataFn } from '../../slice/animeSlice'




const AnimeIndex = () => {


  const dispatch = useDispatch()

  const isSignIn = useSelector(state => state.auth.isSignIn)
  const recent = useSelector(state => state.anime.recent)


  // db데이터 (전역처리)
  const animeData = useSelector(state => state.anime.animeData)

  // DB에서 가져오기 
  useEffect(() => {
    dispatch(animeDataFn())
  },[])
  
  console.log(animeData)

 

  // 상품 모달창 on/off state
  const [isAnimeModal, setIsAnimeModal] = useState(false) 
  // 상품 아이디 state
  const [itemId, setItemId] = useState() 
  
  // 상품 아이디 세팅 & 모달창 on
  const onAnimeModalFn = (e) => {

    const itemId = e.currentTarget.getAttribute('data-id');

    if (isSignIn) {
      dispatch(addRecentFn(itemId))
    }

    setItemId({
      id: itemId
    })

    setIsAnimeModal(true)
  }
  

  console.log(recent)
  console.log(isSignIn)

  return (
    <>
      {isAnimeModal && <AnimeModal itemId={itemId} setIsAnimeModal={setIsAnimeModal}/>}  {/* 상품 모달창 */}
      <div className="anime">
        <div className="anime-con">
          <div className="top-content">
            <h1>애니메이션</h1>
            <hr/>
          </div>
          <div className="bottom-content">
            <div className="anime-items">
              <h2 className="sub-title">
                가족 친구 모두에게 추천하는 인기작
              </h2>
              <ul>
                {animeData && animeData.map((el, idx) => {
                  if (idx < 4) {
                    return (
                      <li key={idx} data-id={el.id} onClick={onAnimeModalFn}>
                        <div className="top">
                          <img src={`/images/itemData/${el.img}`} alt={el.img} />
                        </div>
                        <div className="bottom">
                          <h3>{el.title}</h3>
                        </div>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            <div className="anime-items">
              <h2 className="sub-title">
                한번보면 빠져나올 수 없는 명작들
              </h2>
              <ul>
                {animeData && animeData.map((el, idx) => {
                  if (4 <= idx && idx < 8) {
                    return (
                      <li key={idx} data-id={el.id} onClick={onAnimeModalFn}>
                        <div className="top">
                          <img src={`/images/itemData/${el.img}`} alt={el.img} />
                        </div>
                        <div className="bottom">
                          <h3>{el.title}</h3>
                        </div>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            <div className="anime-items">
              <h2 className="sub-title">
                이번 달의 기대작 이달의 작품
              </h2>
              <ul>
                {animeData && animeData.map((el, idx) => {
                  if (8 <= idx && idx < 12) {
                    return (
                      <li key={idx} data-id={el.id} onClick={onAnimeModalFn}>
                        <div className="top">
                          <img src={`/images/itemData/${el.img}`} alt={el.img} />
                        </div>
                        <div className="bottom">
                          <h3>{el.title}</h3>
                        </div>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            <div className="anime-items">
              <h2 className="sub-title">
                레전드는 영원하다 대표작품
              </h2>
              <ul>
                {animeData && animeData.map((el, idx) => {
                  if (12 <= idx && idx < 16) {
                    return (
                      <li key={idx} data-id={el.id} onClick={onAnimeModalFn}>
                        <div className="top">
                          <img src={`/images/itemData/${el.img}`} alt={el.img} />
                        </div>
                        <div className="bottom">
                          <h3>{el.title}</h3>
                        </div>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimeIndex