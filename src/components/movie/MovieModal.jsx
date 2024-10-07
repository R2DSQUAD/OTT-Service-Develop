import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/cartslice'

const movietData ={
    id:0,
    title:'',
    comment:'',
    price:'',
    img:''
  }
  
const MovieModal = ({modalitem,setMovieModal}) => {

    

    const closeFn =() =>{
        setMovieModal(false)
    }
    // useEffect(()=>{
    //     const axiosFn1=async ()=>{
    //       try{
    //         //   const res = await axios.get(`http://localhost:3001/comedy`,{id:"id값"})
    //           const res = await axios.get(`http://localhost:3001/comedy`,{ params: { id:  }}) // { params: { answer: 42 }
    //         //   const res = await axios.get(`http://localhost:3001/comedy?id=${}`)
    //           console.log(res.data)
    //       }catch(err){
    //         alert(err)
    //       }
    //     }
    //     axiosFn1()
    //   },[])
    const dispatch=useDispatch()
    const addCartFn=()=>{
      const movieCart={
        id : modalitem.id,
      price: modalitem.price,
      title: modalitem.title,
      img: modalitem.img,
      type: modalitem.type
      //count 개수 데이터 추가
      }
      dispatch(addCart(movieCart))
      alert('장바구니에 추가되었습니다')
    }
  return (
  <>
    <div className="movieModal">
        <div className="movieModal-con">
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
                <li className='cart' onClick={addCartFn}>장바구니</li>
            </div>
            <span>{modalitem.comment}</span>
            <span><li>{modalitem.price}원</li></span>
            </div>
            </div>
            </div>
            </>

  )
}

export default MovieModal