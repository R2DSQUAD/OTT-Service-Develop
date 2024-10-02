import axios from "axios";
import React, { useEffect, useState } from "react";

const AnimeModal = ({ itemId, setIsAnimeModal }) => {




  // 모달 데이터
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    const axiosFn = async () => {
      try {
        const items = await axios.get(`http://localhost:3001/animeItems?id=${itemId.id}`)

        setModalData(items.data[0]); // [{}]
        
        console.log(items.data[0], 'data')
      } catch (err) {
        alert(err);
      }
    };
    axiosFn();
  }, []);

  console.log(modalData)
  console.log(itemId, ' <<, ')

  //모달창 닫기
  const closeBtn = () => {
    setIsAnimeModal(false);
  };

  return (
    <>
      <div className="animeModal">
        <div className="animeModal-con">
          <span className="close" onClick={closeBtn}>×</span> {/* x 버튼 */}
          <div className="top">
            <img src={`/images/anime/${modalData.img}`} alt={modalData.img} />
            <h3>{modalData.title}</h3>
          </div>
          <div className="bottom">
            <div className="bottom-line1">
              <span className="age">{modalData.age}</span> 
              <span>·</span>
              <span>{modalData.time}</span>
              <span>·</span>
              <span>{modalData.genre}</span>
            </div>
            <div className="bottom-line2">
              <button>장바구니</button>
              <button>구매하기</button>
            </div>
            <div className="bottom-line3">
              <span className="text">{modalData.text}</span>
              <span className="price">{modalData.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeModal;
