import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieModal1 = ({setMovieModal1}) => {
    const navigate = useNavigate()


    const confirmFn = (e) => {
        setMovieModal1(false);
       
      }
  return (
    <div className="moviemodal1">
        <div className="moviemodal1-con">
            <span>장바구니 추가 완료</span>
            <div className="button">
            <button onClick={confirmFn}>확인</button>
            </div>
        </div>
    </div>
  )
}

export default MovieModal1