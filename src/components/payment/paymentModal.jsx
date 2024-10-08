import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({setIsPaymentModal}) => {

  console.log(setIsPaymentModal)
  const navigate = useNavigate();

  const confirmFn = (e) => {
    setIsPaymentModal(false);
    navigate("kakaoAPI");
  }

  const cancelFn = (e) => {
    setIsPaymentModal(false);
    navigate(-1);
  }

  return (
    <>
      <div className="paymentModal">
        <div className="paymentModal-con">
          <span>구매하시겠습니까?</span>
          <div className="btn">
          <button onClick={cancelFn}>취소</button>
          <button onClick={confirmFn}>확인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
