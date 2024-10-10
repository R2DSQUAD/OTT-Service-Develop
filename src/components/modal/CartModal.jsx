import React from 'react'

const CartModal = ({setIsCartModal,setDramaModal}) => {
  const btFn=(e)=>{
    setIsCartModal(false)
    setDramaModal(false)
  }
  return (
    <>
    <div className="cartModal">
      <div className="cartModal-con">
        <span>장바구니에 추가되었습니다.</span>
        <div className="cartBtn">
          <button onClick={btFn}>확인</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartModal