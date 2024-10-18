import React from 'react'

const AdminAddPlaceModal2 = ({setAddPlacemodal2}) => {
    const confirmFn = (e) => {
        setAddPlacemodal2(false);
        
      }
  return (
    <div className="addplace2">
    <div className="addplace2-con">
        <span>다시 입력해주세요</span>
        <div className="button">

        <button onClick={confirmFn}>확인</button>
        </div>
    </div>
</div>
  )
}

export default AdminAddPlaceModal2