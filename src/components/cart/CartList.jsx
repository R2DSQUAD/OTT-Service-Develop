import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCart } from '../../slice/cartslice'


const CartList = () => {

  const cartItems=useSelector(state => state.cart.items)
  console.log(cartItems)

  const navigate=useNavigate()
  const dispatch=useDispatch()

  return (
    <>
      <div className="cart">
        <div className="cart-con">
          <button onClick={()=>{
            navigate(-1)
          }}>이전페이지</button>
          <div className="item-list">
            {cartItems && cartItems.map(
              (el,idx)=>{
                return(
                  <div className="cart-items" key={idx}>
                    <div className="top">
                      <img src={el.img} alt={el.img} />
                    </div>
                    <div className="bottom">
                      <span>제목:{el.title}</span>
                      <span>가격:{el.price}</span>
                      <span>수량:{el.count}</span>
                      <button className='delete' onClick={()=>{
                        dispatch(deleteCart(el.id))
                        console.log(el.id)
                      }}>X</button>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartList