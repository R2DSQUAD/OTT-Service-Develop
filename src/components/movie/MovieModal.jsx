import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/cartslice'
import MovieModal1 from './MovieModal'

const movietData ={
    id:0,
    title:'',
    comment:'',
    price:'',
    img:''
  }
  
const MovieModal = ({modalitem,setMovieModal}) => {

  const [modalmovieCount, setModalmovieCount] = useState(1);
  const [moviemodal1, setMovieModal1] = useState(false);
  const movieModal1Fn = () => {
    setMovieModal1(true);
  }
    const closeFn =() =>{
        setMovieModal(false)
    }
    const incrementFn = () => {
      setModalmovieCount(modalmovieCount+1);
    }
  
    const decrementFn = () => {
      setModalmovieCount(modalmovieCount - 1);
      modalmovieCount <= 1 ? setModalmovieCount(1) : setModalmovieCount(modalmovieCount - 1);
    };

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
      type: modalitem.type,
      count:modalmovieCount
      
      //count 개수 데이터 추가
      }
      dispatch(addCart(movieCart))
       movieModal1Fn()
    }
  return (
  <>
   {moviemodal1 ? (<MovieModal setMovieModal1={setMovieModal1}/>):(<></>)}
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
                 <li>{modalitem.age}</li>
                  <li>{modalitem.year}</li>  
                  <li>{modalitem.genre}</li>
                  <li>{modalitem.time}</li>
            </div>
            <div className="movie-payment">
                <li className='payment'>결제하기</li>
                <li className='cart' onClick={addCartFn}>장바구니</li>
                <div className="movieCount">
                  <button onClick={decrementFn}>-</button>
                  <span>{modalmovieCount}</span>
                  <button onClick={incrementFn}>+</button>
                </div>
            </div>
            <div className="movie-comment">

            <span>{modalitem.comment}</span>
            </div>
            <div className="movie-price">

            <span><li>{modalitem.price*modalmovieCount}원</li></span>
            </div>
            </div>
            </div>
            </>

  )
}

export default MovieModal