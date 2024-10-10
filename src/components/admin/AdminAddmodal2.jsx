import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminAddmodal2 = ({setAddmodal2}) => {
    const navigate = useNavigate();

    const confirmFn = (e) => {
        setAddmodal2(false);
        
      }
  return (
    <div className="addmodal2">
        <div className="addmodal2-con">
            <span>다시 입력해주세요</span>
            <div className="button">

            <button onClick={confirmFn}>확인</button>
            </div>
        </div>
    </div>
  )
}

export default AdminAddmodal2