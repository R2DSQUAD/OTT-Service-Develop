import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allItemThunk } from "../../slice/allItemSlice";
import { useNavigate } from "react-router-dom";
import PaymentCartModal from "./PaymentCartModal";

const loginRef = {
  id: "",
  userName: "",
  userEmail: "",
  userPw: "",
  phoneNumber: "",
  role: "ROLE_MEMBER",
  address: "",
};

const PaymentCart = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}/${
    today.getMonth() + 1
  }/${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [selectBranch, setSelectBranch] = useState(0);
  const [orderType, setOrderType] = useState(0);
  const [isVertical, setIsVertical] = useState(true);
  const [itemPrice, setItemPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const loginInfo = useSelector((state) => state.auth.signInUser); //로그인 데이터
  const [loginInfoRef, setLoginInfoRef] = useState(loginRef);
  const isLogin = useSelector((state) => state.auth.isSignIn);

  const paymentData = {
    branchType: selectBranch, //지점
    paymentMethod: paymentMethod, //결제 수단
    orderType: orderType, //주문 방식
    userEmail: loginInfoRef.userEmail, //결제자 아이디(이메일)
    userName: loginInfoRef.userName, //결제자
    address: loginInfoRef.address, //결제자 주소
    phone: loginInfoRef.phoneNumber, //결제자 핸드폰번호
    paymentResult: cart, //결제 내역
    paymentAmount: totalPrice, //결제 금액
    time: formattedDate, //결제 시간
  };

  const validation = {
    paymentMethod: "결제수단",
    selectBranch: "지점",
    orderType: "주문방식",
  };

  const validateOrder = () => {
    const validate = [];
    if (paymentMethod === 0) validate.push(validation.paymentMethod);
    if (selectBranch === 0) validate.push(validation.selectBranch);
    if (orderType === 0) validate.push(validation.orderType);
    return validate;
  };

  const paymentMethodHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  const selectBranchHandler = (e) => {
    setSelectBranch(e.target.value);
  };

  const orderTypeHandler = (e) => {
    setOrderType(e.target.value);
  };

  useEffect(() => {
    if (loginInfo.length === 0) {
      setLoginInfoRef(loginRef);
      alert("로그인을 해주세요");
      navigate("/signIn");
    } else {
      setLoginInfoRef(loginInfo[0]);
    }
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
        type: item.type,
      };
    });

    setTotalPrice(total);
    setItemPrice(price);
  }, [cart]);

  const paymentModalFn = (e) => {
    const validates = validateOrder();
    if (validates.length > 0) {
      alert(`${validates.join(", ")}을(를) 선택해주세요`);
    } else {
      if (!isLogin) {
        alert("로그인을 해주세요");
        navigate("/signIn");
      } else {
        setIsPaymentModal(true);
      }
    }
  };

  return (
    <>
      {isPaymentModal ? (
        <PaymentCartModal
          setIsPaymentModal={setIsPaymentModal}
          paymentData={paymentData}
        />
      ) : (
        <></>
      )}
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
                          {el.type && <li>{el.type}</li>}
                          {el.age && <li>{el.age}</li>}
                          {el.year && <li>{el.year}</li>}
                          {el.time && <li>{el.time}</li>}
                          {el.genre && <li>{el.genre}</li>}
                        </ul>
                        <ul className="paymentInfo">
                          <li>
                            <span>
                              {el.count}편 / {el.price}원
                            </span>
                          </li>
                          <li>
                            <span>총 금액 {el.price * el.count}원</span>
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
            <span>결제 수단</span>
            <div className="paymentType">
              <input
                id="creditCard"
                type="radio"
                value="카드결제"
                onChange={paymentMethodHandler}
                checked={paymentMethod === "카드결제"}
              />
              <label htmlFor="creditCard">카드결제 💳</label>
            </div>
            <div className="paymentType">
              <input
                type="radio"
                id="kakaoPay"
                value="카카오 페이"
                onChange={paymentMethodHandler}
                checked={paymentMethod === "카카오 페이"}
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
                value="네이버 페이"
                onChange={paymentMethodHandler}
                checked={paymentMethod === "네이버 페이"}
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
                value="노원 본점"
                onChange={selectBranchHandler}
                checked={selectBranch === "노원 본점"}
              />
              <label htmlFor="nowon">노원 본점</label>
            </div>
            <div className="branchType">
              <input
                type="radio"
                id="hongdae"
                value="홍대점"
                onChange={selectBranchHandler}
                checked={selectBranch === "홍대점"}
              />
              <label htmlFor="hongdae">홍대점</label>
            </div>
            <div className="branchType">
              <input
                type="radio"
                id="gangnam"
                value={"강남점"}
                onChange={selectBranchHandler}
                checked={selectBranch === "강남점"}
              />
              <label htmlFor="gangnam">강남점</label>
            </div>
          </div>
          <div className="selectOrder">
            <span>주문 방식</span>
            <div className="orderType">
              <input
                type="radio"
                id="reservation"
                value="예약 주문"
                onChange={orderTypeHandler}
                checked={orderType === "예약 주문"}
              />
              <label htmlFor="reservation">예약 주문</label>
            </div>
            <div className="orderType">
              <input
                type="radio"
                id="directly"
                value="직접 방문"
                onChange={orderTypeHandler}
                checked={orderType === "직접 방문"}
              />
              <label htmlFor="directly">직접 방문</label>
            </div>
            <div className="orderType">
              <input
                type="radio"
                id="parcel"
                value="택배 배송"
                onChange={orderTypeHandler}
                checked={orderType === "택배 배송"}
              />
              <label htmlFor="parcel">택배 배송</label>
            </div>
          </div>
          <div className="totalAmount">
            {itemPrice &&
              itemPrice.map((el, idx) => {
                return (
                  <>
                    <div className="contentPrice">
                      <span>
                        [{el.type}] <b>{el.title}</b> 금액
                      </span>
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
            <div className="contentTotalAmonut">
              <span>총 금액</span>
              <span>{totalPrice}원</span>
            </div>
          </div>
          <div className="bottomCon">
            <div className="userInfo">
              <span>주문자 정보</span>
              <div className="userEmail">
                <span>이메일</span>
                <span>{loginInfoRef.userEmail}</span>
              </div>
              <div className="userName">
                <span>이름</span>
                <span>{loginInfoRef.userName}</span>
              </div>
              <div className="userPhone">
                <span>전화번호</span>
                <span>{loginInfoRef.phoneNumber}</span>
              </div>
              <div className="userAddress">
                <span>주소</span>
                <span>{loginInfoRef.address}</span>
              </div>
            </div>
            <div className="paymentBtn">
              <button onClick={paymentModalFn}>결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCart;
