import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/cartslice'
import { useNavigate } from 'react-router-dom'

const item={
  id: 0,
  title:'',
  price:'',
  img:'',
  type:''
}

const DramaModal = ({modalItem,setDramaModal}) => {

  // console.log(modalItem)
  const closeFn = () => {
    setDramaModal(false)
  }
  
  const [modalList,setModalList]=useState(item)
  const [count,setCount]=useState(1)
  useEffect(()=>{
    const axFn= async()=>{
      try{
        const res=await axios.get(`http://localhost:3001/dramaItems?id=${modalItem.id}`)
        // console.log(typeof(res.data))
        // console.log(typeof(res.data[0]))
        // console.log(res.data)
        // console.log(res.data[0])
        // console.log(modalItem.id)
        
        setModalList(res.data[0])
        // console.log(setModalList)
        
      }
      catch(err){alert(err)}
    }
    axFn()
  },[])
  
  const dispatch=useDispatch()
  const addCartFn=()=>{
    const dramaCart={
      id : modalList.id,
      price: modalList.price,
      title: modalList.title,
      img: `/images/drama/${modalList.img}`,
      type: modalList.type,
      count: count      
    }
    dispatch(addCart(dramaCart))
    console.log(dramaCart)
    
  }
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
      <div className="dramaModal">
        <div className="dramaModal-con">
          <span className='close' onClick={closeFn}>X</span>
          <div className="item">
            <div className="modal-list">
               <img src={`/images/drama/${modalList.img}`} alt={modalList.img} />
               <span>제목:{modalList.title}</span>
               <span>가격:{modalList.price}</span>
            </div>
            <button onClick={increFn}>+</button>
            <span>{count}</span>
            <button onClick={decreFn}>-</button>
            <button onClick={addCartFn}>장바구니</button>
            <button onClick={addCart2Fn}>장바구니이동</button>
            <button>구매</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DramaModal