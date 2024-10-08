import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allItemThunk } from "../../slice/allItemSlice";
import PaymentModal from "./PaymentModal";

const PaymentCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [selectBranch, setSelectBranch] = useState(0);
  const [isVertical, setIsVertical] = useState(true);
  const [itemPrice, setItemPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentModal, setIsPaymentModal] = useState(false)

  const paymentMethodHandler = (e) => {
    setPaymentMethod(Number(e.target.value));
    console.log(paymentMethod);
  };

  const selectBranchHandler = (e) => {
    setSelectBranch(Number(e.target.value));
    console.log(selectBranch);
  };

  useEffect(() => {
    dispatch(allItemThunk());
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = function () {
      const width = img.width;
      const height = img.height;

      if (width > height) {
        setIsVertical(true);
      } else {
        setIsVertical(false);
      }
    };
  }, []);

  useEffect(() => {
    let total = 0;
    const price = cart.map((item) => {
      total += item.price * item.count;
      return {
        price: item.price * item.count,
        title: item.title,
        type: item.type
      };
    });
  
    setTotalPrice(total);
    setItemPrice(price);
  }, [cart]);

  const paymentModalFn = (e) => {
    setIsPaymentModal(true);
  }

  return (
    <>
      {isPaymentModal ? (<PaymentModal setIsPaymentModal={setIsPaymentModal}/>) : (<></>)}
      <div className="payment">
        <div className="payment-con">
          <div className="top">
            <h1>구매 콘텐츠</h1>
            <hr />
          </div>
          <div className="paymentItemList">
            {cart &&
              cart.map((el, idx) => {
                return (
                  <>
                    <div className="contentTop">
                      <div className="contentImg">
                        <img
                          className={
                            isVertical ? "verticalImg" : "horizontalImg"
                          }
                          src={el.img}
                          alt={el.img}
                        />
                      </div>
                      <div className="contentType">
                        <ul className="contentInfo">
                          <li>{el.type}</li>
                          <li>{el.age}</li>
                          <li>{el.year}</li>
                          <li>{el.time}</li>
                          <li>{el.genre}</li>
                        </ul>
                        <ul className="paymentInfo">
                          <li>
                            <span>{el.count}편 / {el.price}원</span>
                          </li>
                          <li>
                            <span>총 금액 {el.price  * el.count}원</span>
                          </li>
                          <li>
                            <span>
                              ⭐ 이벤트, 쿠폰, 결제 수단에 따라 가격이 달라질 수
                              있어요.
                            </span>
                          </li>
                        </ul>
                        <ul className="paymentInfo">
                          <li>
                            <span>쿠폰</span>
                          </li>
                          <li>
                            <input
                              type="text"
                              placeholder="ABCDE-12345-ABCDE-12345"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="paymentMethod">
            <span>결제 방법</span>
            <div className="paymentType">
              <input
                type="radio"
                id="creditCard"
                value={0}
                onChange={paymentMethodHandler}
                checked={paymentMethod === 0}
              />
              <label htmlFor="creditCard">카드결제 💳</label>
            </div>
            <div className="paymentType">
              <input
                type="radio"
                id="kakaoPay"
                value={1}
                onChange={paymentMethodHandler}
                checked={paymentMethod === 1}
              />
              <label htmlFor="kakaoPay">
                카카오페이
                <img src="/images/payment/kakaoPay.png" alt="kakaoPay" />
              </label>
            </div>
            <div className="paymentType">
              <input
                type="radio"
                id="naverPay"
                value={2}
                onChange={paymentMethodHandler}
                checked={paymentMethod === 2}
              />
              <label htmlFor="naverPay">
                네이버페이
                <img src="/images/payment/naverPay.svg" alt="naverPay" />
              </label>
            </div>
          </div>
          <div className="select">
            <span>지점 선택</span>
            <div className="branchType">
              <input
                type="radio"
                id="nowon"
                value={0}
                onChange={selectBranchHandler}
                checked={selectBranch === 0}
              />
              <label htmlFor="nowon">노원 본점</label>
            </div>
            <div className="branchType">
              <input
                type="radio"
                id="hongdae"
                value={1}
                onChange={selectBranchHandler}
                checked={selectBranch === 1}
              />
              <label htmlFor="hongdae">홍대</label>
            </div>
            <div className="branchType">
              <input
                type="radio"
                id="gangnam"
                value={2}
                onChange={selectBranchHandler}
                checked={selectBranch === 2}
              />
              <label htmlFor="gangnam">강남</label>
            </div>
          </div>
          <div className="totalAmount">
            {itemPrice &&
              itemPrice.map((el, idx) => {
                return (
                  <>
                    <div className="contentPrice">
                      <span>[{el.type}] <b>{el.title}</b> 금액</span>
                      <span>{el.price}원</span>
                    </div>
                  </>
                );
              })}
            <div className="contentDiscount">
              <span>할인</span>
              <span>0원</span>
            </div>
            <div className="contentCoupon">
              <span>쿠폰</span>
              <span>0원</span>
            </div>
            <div className="contetTotalAmonut">
              <span>총 금액</span>
              <span>{totalPrice}원</span>
            </div>
          </div>
          <div className="paymentBtn">
            <button onClick={paymentModalFn}>결제하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCart