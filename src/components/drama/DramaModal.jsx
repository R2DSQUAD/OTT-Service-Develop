import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/cartslice'
import { useNavigate } from 'react-router-dom'
import { addPayment } from '../../slice/paymentSlice'
import CartModal from '../modal/CartModal'

const item={
  id: 0,
  title:'',
  price:'',
  img:'',
  genre:''
}

const DramaModal = ({modalItem,setDramaModal}) => {
  const [isCartModal,setIsCartModal]=useState(false)
  const closeFn = () => {
    setDramaModal(false)
  }  
  const [modalList,setModalList]=useState(item)
  const [count,setCount]=useState(1)
  useEffect(()=>{
    const axFn= async()=>{
      try{
        const res=await axios.get(`http://localhost:3001/allItems?id=${modalItem.id}`)
        setModalList(res.data[0])       
      }
      catch(err){alert(err)}
    }
    axFn()
  },[])

  const dramaCart={
    id: modalList.id,
    type: modalList.type,
    title: modalList.title,
    price: modalList.price,
    img: `/images/itemData/${modalList.img}`,
    genre: modalList.genre,
    age: modalList.age,
    year: modalList.year,
    time: modalList.time,
    count: count,
    comment: modalList.comment, 
  }
  
  const dispatch=useDispatch()
  const addCartFn=()=>{
    dispatch(addCart(dramaCart))
    setIsCartModal(true)
  }

  const addPayementFn = () => {
    dispatch(addPayment(dramaCart));
    alert("구매페이지로 이동합니다.");
    navigate("/paymentIndex");
  };

  const navigate=useNavigate()
  const addCart2Fn=()=>{
    navigate('/cart')
  }
  const increFn=()=>{
    setCount(count+1)
  }
  const decreFn=()=>{
    count<=1 ? setCount(1) : setCount(count-1) 
  }

  return (
    <>
      {isCartModal ?<CartModal setIsCartModal={setIsCartModal} setDramaModal={setDramaModal}/>:<></>}
      <div className="dramaModal">
        <div className="dramaModal-con">
            <span className='close' onClick={closeFn}>X</span>
          <div className="item">
            <div className="modal-list">
               <img src={`/images/itemData/${modalList.img}`} alt={modalList.img} />
               <span>제목:{modalList.title}</span>
               <span>가격:{modalList.price}</span>
               <span>총 금액:{modalList.price * count}</span>
            </div>
            <button onClick={increFn}>+</button>
            <span>{count}</span>
            <button onClick={decreFn}>-</button>
            <button onClick={addCartFn}>장바구니</button>
            <button onClick={addCart2Fn}>장바구니이동</button>
            <button onClick={addPayementFn}>구매</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DramaModal