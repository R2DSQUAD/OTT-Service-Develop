import React from 'react'

const MapModal = ({setMapModal,modalItem}) => {
  const closeFn=()=>{
    setMapModal(false)
  }
  console.log(modalItem)
  return (
    <>
    <div className="mapModal">
      <div className="mapModal-con">
        <div className="maptitle">
          <div className="none"></div>
          <h2><img src="/images/common/logo.svg" alt="logo" /></h2>
          <span className="close" onClick={closeFn}>✕</span>
        </div>
        <div className="mapitem">
          <div className="maptop">
            <img src="/images/shopList/CGV중계.png" alt="movie" />
          </div>
          <div className="mapbottom">
            <span>{modalItem.place_name}</span>
            <div className="mapDetail">
              <ul className='mapName'>
                <li>지점명</li>
                <li>상세주소</li>
                <li>연락처</li>
              </ul>
              <ul className='nameDetail'>
                <li>{modalItem.place_name}</li>
                <li>{modalItem.address_name}</li>
                <li>{modalItem.phone}</li>
              </ul>
            </div>
            <div className="none"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MapModal