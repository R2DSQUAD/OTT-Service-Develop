import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);
  const signInUser = useSelector((state) => state.auth.signInUser);

  const userEmail = signInUser[0].userEmail;
  const paymentDataFilter = paymentData.filter((el) => el.userEmail === userEmail);

  useEffect(() => {
    const AxiosFn = async (e) => {
      try {
        const res = await axios.get("http://localhost:3001/payments");
        const resData = res.data;
        setPaymentData(resData);
      } catch (err) {
        alert(err);
      }
    };
    AxiosFn();
  }, []);

  return (
    <>
      <div className="payment">
        <div className="payment-con">
          <ul>
            {paymentDataFilter &&
              paymentDataFilter.map((el, idx) => {
                return (
                  <>
                    <li key={idx}>{el.branchType}</li>
                    <li>{el.userEmail}</li>
                    <li>{el.userName}</li>
                    <li>{el.address}</li>
                    <li>{el.phone}</li>
                    <li>{el.paymentMethod}</li>
                    <li>{el.orderType}</li>
                    <li>{el.paymentAmout}</li>
                    <li>{el.time}</li>
                    <li>
                      <ul>
                        {el.paymentResult &&
                          el.paymentResult.map((el, idx) => {
                            return (
                              <>
                                <li key={idx}>{el.type}</li>
                                <li>{el.title}</li>
                                <li>{el.price}</li>
                                <li>
                                  <img src={el.img} alt={el.img} />
                                </li>
                                <li>{el.year}</li>
                                <li>{el.time}</li>
                                <li>주문 개수: {el.count}</li>
                              </>
                            );
                          })}
                      </ul>
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Payment;
