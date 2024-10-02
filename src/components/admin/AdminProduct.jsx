import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminProduct = () => {

  const[itemList,setItemList]=useState([])

  useEffect(()=>{
    const axiosFn=async()=>{
      try{
        const res = await axios.get('http://localhost:3001/allItems')
        console.log(res.data)
      setItemList(res.data)
    }catch(err){
      alert(err)
    }
  }
  axiosFn()
},[])
    
  
  return (
    <>
      <div className="admin-product">
        <div className="admin-product-con">
          <h1>ADMIN-PRODUCTS</h1>
          <div className="product">
            <div className="title">
              <span>번호</span>
              <span>제목</span>
              <span>장르</span>
              <span>가격</span>
              <span>보기</span>
            </div>
            <div className="allItem-list">
            <ul>
              {itemList && itemList.map((el, idx) => {
                return (
                  <li key={idx}>
                    <span>{el.id}</span>
                    <span>{el.title}</span>
                    <span>{el.genre}</span>
                    <span>{el.price}</span>
                    <span>{el.address}</span>
                    <span>보기</span>
                  </li>
                )
              })}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProduct