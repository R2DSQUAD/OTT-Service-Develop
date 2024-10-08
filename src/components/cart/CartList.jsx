import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decreCount, deleteCart, increCount } from '../../slice/cartslice'

const CartList = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartItems=useSelector(state => state.cart.items)
  console.log(cartItems)
  let totalPrice=0;
  let totalCount=0;
  cartItems.forEach((item)=>{
    totalPrice += item.price * item.count
    totalCount += item.count
  })
  const payFn=(e)=>{
    navigate('/paymentCart')
  }

  return (
    <>
      <div className="cartIndex">
        <div className="cart-con">
          <h2 className="title">상품 목록</h2>
          <div className="item-list">
            {cartItems && cartItems.map(
              (el,idx)=>{
                return(
                  <div className="cart-items" key={idx}>
                    <div className="top">
                      <img src={el.img} alt={el.img} />
                    </div>
                    <div className="bottom">
                      <span>{el.type}제목 : {el.title}</span>
                      <span>가격:{el.price}</span>
                      <button className='minus' onClick={()=>{dispatch(decreCount(el.id))}}>-</button>
                      <span>수량:{el.count}</span>
                      <button className='plus' onClick={()=>{dispatch(increCount(el.id))}}>+</button>
                      <span>총 금액:{el.count * el.price}</span>
                      <button className='delete' onClick={()=>{
                        dispatch(deleteCart(el.id))
                      }}>X</button>
                    </div>
                  </div>
                )
              }
            )}
          </div>
          <button className='back' onClick={()=>{
            navigate(-1)
          }}>이전페이지</button>
        </div>
        {cartItems.length > 0 ?
          <div className="cart-pay">
            <div className="cart-pay-con">   
              <ul>
                <li><span>{cartItems[0].title}외 {totalCount-1}개</span></li>
                <li><span>총 금액:{totalPrice}</span></li>
              </ul>
              <button className='paybtn' onClick={payFn}>결제하기</button>
            </div>
          </div> : <></>}
      </div>
    </>
  )
}

export default CartList