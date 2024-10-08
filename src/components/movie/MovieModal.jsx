import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/cartslice'
import { addPayment } from '../../slice/paymentSlice'
import { useNavigate } from 'react-router-dom'

const movietData ={
    id:0,
    title:'',
    comment:'',
    price:'',
    img:''
  }
  
const MovieModal = ({modalitem,setMovieModal}) => {

    
  const navigate = useNavigate();
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

    const movieCart={
      id: modalitem.id,
  type: modalitem.type,
  title: modalitem.title,
  price: modalitem.price,
  img: `/images/itemData/${modalitem.img}`,
  genre: modalitem.genre,
  age: modalitem.age,
  year: modalitem.year,
  time: modalitem.time,
  count: modalitem,
  coment: modalitem.coment, 
    //count 개수 데이터 추가
    }

    const dispatch=useDispatch()
    const addCartFn=()=>{
      
      dispatch(addCart(movieCart))
      alert('장바구니에 추가되었습니다')
    }

    const addPayementFn = () => {
      dispatch(addPayment(movieCart));
      alert("구매페이지로 이동합니다.");
      navigate("/paymentIndex");
    };
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
                <li className='payment' onClick={addPayementFn}>결제하기</li>
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