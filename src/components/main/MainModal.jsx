import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/cartslice'
const movietData ={
    id:'',
    title:'',
    price:'',
    img:'',
    comment:''
  }
const MainModal = ({modalitem,setMainModal}) => {
  const [modalmainCount, setModalmainCount] = useState(1);
    const closeFn =() =>{
        setMainModal(false)
    }
    const dispatch=useDispatch()
    const addCartFn=()=>{
      const movieCart={
        id : modalitem.id,
      price: modalitem.price,
      title: modalitem.title,
      img: modalitem.img,
      type: modalitem.type,
      count:modalmainCount
      //count 개수 데이터 추가
      }
      dispatch(addCart(movieCart))
      alert('장바구니에 추가되었습니다')
    }
    const incrementFn = () => {
      setModalmainCount(modalmainCount+1);
    }
  
    const decrementFn = () => {
      setModalmainCount(modalmainCount - 1);
      modalmainCount <= 1 ? setModalmainCount(1) : setModalmainCount(modalmainCount - 1);
    };




  return (
  <>
    <div className="mainModal">
        <div className="mainModal-con">
            <span className='close'
            
            onClick={closeFn}>x
            </span>
            <div className="top">
                <img src={modalitem.img} alt={modalitem.img} />
            </div>
            <div className="bottom">
            <span>{modalitem.title}</span>
            <li>{modalitem.age}</li>
                  <li>{modalitem.year}</li>  
                  <li>{modalitem.genre}</li>
                  <li>{modalitem.time}</li>
                  </div>
            <div className="main-payment">
                <li className='payment'>결제하기</li>
                <li className='cart' onClick={addCartFn}>장바구니</li>
             <div className="mainCount">
                  <button onClick={decrementFn}>-</button>
                  <span>{modalmainCount}</span>
                  <button onClick={incrementFn}>+</button>
            </div>
                </div>
            <div className="main-commnet">

            <span>{modalitem.comment}</span>
            </div>
            <div className="main-price">

            <span><li>{modalitem.price*modalmainCount}원</li></span>
            </div>
            </div>
            </div>
            
            </>

  )
  
}

export default MainModal