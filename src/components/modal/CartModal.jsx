import React, { useEffect, useRef } from 'react'

const CartModal = ({setIsCartModal,setDramaModal,content}) => {
  const ref=useRef()
  const btFn=(e)=>{
    setIsCartModal(false)
  }
  useEffect(()=>{
    console.log(content)
    console.log(ref.current)
    ref.current.innerText=content
  },[])
  return (
    <>
    {content==='장바구니'&&
    <div className="cartModal">
      <div className="cartModal-con">
        <span ref={ref}></span>
        <div className="cartBtn">
          <button onClick={btFn}>확인</button>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default CartModal