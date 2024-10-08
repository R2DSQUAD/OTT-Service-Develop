import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../slice/cartslice";
import { addPayment } from "../../slice/paymentSlice";
import {useNavigate } from "react-router-dom";

const WebtoonModal = ({ modalItem, setIsWebtoonModal }) => {
  const [modalItemCount, setModalItemCount] = useState(1);
  const [modalItems, setModalItems] = useState([])
  const navigate = useNavigate()

  const closeFn = (e) => {
    setIsWebtoonModal(false);
  };

  const incrementFn = () => {
    setModalItemCount(modalItemCount + 1);
  };

  const decrementFn = () => {
    setModalItemCount(modalItemCount - 1);
    modalItemCount <= 1
      ? setModalItemCount(1)
      : setModalItemCount(modalItemCount - 1);
  };

  useEffect(() => {
    const axiosFn = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/allItems?id=${modalItem.id}`
        );
        setModalItems(res.data[0]);
      } catch (err) {
        alert("데이터가 없습니다. 네트워크 상태를 확인해주세요.");
      }
    };
    axiosFn();
  }, []);

  const webtoonCart = {
    id: modalItems.id,
    type: modalItems.type,
    title: modalItems.title,
    price: modalItems.price,
    img: `/images/itemData/${modalItems.img}`,
    genre: modalItems.genre,
    age: modalItems.age,
    year: modalItems.year,
    time: modalItems.time,
    count: modalItemCount,
    coment: modalItems.coment,
  };

  const dispatch = useDispatch();
  const addCartFn = () => { 
    dispatch(addCart(webtoonCart));
    alert("장바구니에 추가되었습니다");
  };

  const addPayementFn = () => {
    dispatch(addPayment(webtoonCart));
    alert("구매페이지로 이동합니다.");
    navigate("/paymentIndex");
  };

  return (
    <>
      <div className="webtoonModal">
        <div className="webtoonModal-con">
          <div className="item">
            <span className="close" onClick={closeFn}>
              ×
            </span>
            <div className="top">
              <img
                src={`/images/itemData/${modalItems.img}`}
                alt={modalItems.img}
              />
              <span className="title">{modalItems.title}</span>
            </div>
            <div className="bottom">
              <div className="detail">
                <ul>
                  <li>{modalItems.age}</li>
                  <li>·</li>
                  <li>{modalItems.year}</li>
                  <li>·</li>
                  <li>{modalItems.genre}</li>
                </ul>
              </div>
              <div className="cartBtn">
                <button onClick={addPayementFn}>📼 구매하기</button>
                <button onClick={addCartFn}>🛒 장바구니</button>
                <div className="itemCount">
                  <button onClick={decrementFn}>-</button>
                  <span>{modalItemCount}</span>
                  <button onClick={incrementFn}>+</button>
                </div>
              </div>
              <div className="comment">
                <span>{modalItems.comment}</span>
              </div>
              <div className="price">
                <span>{modalItems.price}원</span>
                <span>총 금액: {modalItems.price * modalItemCount}원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebtoonModal;
