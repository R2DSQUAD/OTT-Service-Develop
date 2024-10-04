import React, { useEffect, useState } from 'react'
import AnimeModal from './AnimeModal'
import axios from 'axios'



const AnimeIndex = () => {

  // DB 데이터 담을 state
  const [animeList, setAnimeList] = useState([]) 

  // DB에서 가져오기 
  useEffect(() => {
    const getData = async () => {
      try {
        const items = await axios.get(`http://localhost:3001/allItems`)
        setAnimeList(items.data) 
        
      } catch(err) {
        alert(err)
      }
    }
    getData()
  },[])
  

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
              {animeList.map((el, idx) => {
                if (el.type === "애니메이션"){

                
                return(
                  <>
                     {idx%4==0 ? <h1 className={`ani-title${idx/4 + 1}`}>{el.subtitle}</h1> : <></>}  {/* 큰제목 */}
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