import axios from "axios";
import React, { useEffect, useState } from "react";

const WebtoonModal = ({ modalItem, setIsWebtoonModal }) => {
  const [modalItems, setModalItems] = useState();

  const closeFn = (e) => {
    setIsWebtoonModal(false);
  };

  useEffect(() => {
    const axiosFn = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/webtoonItems?id=${modalItem.id}`
        );
        setModalItems(res.data);
        console.log(res.data);
      } catch (err) {
        alert("데이터가 없습니다. 네트워크 상태를 확인해주세요.");
      }
    };
    axiosFn();
  }, []);

  return (
    <>
      <div className="webtoonModal">
        <div className="webtoonModal-con">
          <div className="item">
            <div className="close" onClick={closeFn}>
              X
            </div>
          </div>
          <ul>
            {modalItems &&
              modalItems.map((el, idx) => {
                return (
                  <li key={idx}>
                    <div className="itemImg">
                      <img src={`/images/webtoon/${el.img}`} alt={el.img} />
                    </div>
                    <div>{el.title}</div>
                    <div>{el.age}</div>
                    <div>{el.year}</div>
                    <div>{el.genre}</div>
                    <div>{el.comment}</div>
                    <div>{el.price}</div>  
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WebtoonModal;
