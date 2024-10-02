import React from 'react'
const movietData ={
    id:0,
    title:'',
    price:'',
    img:'',
    comment:''
  }
const MainModal = ({modalitem,setMainModal}) => {
  
    const closeFn =() =>{
        setMainModal(false)
    }
   
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
            <div className="payment">
                <li className='payment'>결제하기</li>
                <li className='cart'>장바구니</li>
            </div>
            
            <span>{modalitem.comment}</span>
            <span><li>{modalitem.price}원</li></span>
            </div>
            </div>
            </div>
            </>

  )
  
}

export default MainModal