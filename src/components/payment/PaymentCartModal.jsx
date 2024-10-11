import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allDeleteCart } from "../../slice/cartslice";
import { useDispatch } from "react-redux";

const PaymentCartModal = ({ setIsPaymentModal, paymentData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmFn = (e) => {
    setIsPaymentModal(false);
    alert("결제 성공");
    alert("결제내역 페이지로 이동합니다.");
    const AxiosFn = async (e) => {
      try {
        const res = await axios.post(
          `http://localhost:3001/payments`,
          JSON.stringify(paymentData)
        );
        const resData = res.data;
        return resData;
      } catch (err) {
        alert(err);
      }
    };
    AxiosFn();
    dispatch(allDeleteCart());
    navigate("/payment");
  };

  const cancelFn = (e) => {
    setIsPaymentModal(false);
    navigate(-1);
  };

  console.log(paymentData, "modal_test");
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

export default PaymentCartModal;
