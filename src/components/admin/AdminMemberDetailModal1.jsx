import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const AdminMemberDetailModal1 = ({setMemberModal1}) => {
    const navigate=useNavigate()
    const param=useParams()
    const confirmFn = (e) => {
        setMemberModal1(false);
        
      }
      const onDeleteFn = (e) =>{
        const addAxiosFn = async (e) =>{
            axios.delete(`http://localhost:3001/members/${param.id}`)
            navigate(-1);
        }
        addAxiosFn()
    }

  return (
    <div className="delete-member">
        <div className="delete-member-con">
            <span>삭제 하시겠습니까??</span>
            <div className="button">
            <button onClick={onDeleteFn} >네</button>
            <button onClick={confirmFn}>아니요</button>
            </div>
        </div>
    </div>
  )
}

export default AdminMemberDetailModal1