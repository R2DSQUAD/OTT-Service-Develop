import React from 'react'
import { Link } from 'react-router-dom'

const AdminIndex = () => {
  return (
    <div className="adminIndex">
      <div className="adminIndex-con">
        <div className="title">
        <h1>AdminPage</h1>
        </div>
        <div className="category">
          <ul>
            <li>멤버</li>
            <li><Link to={"/admin/cart"}>장바구니</Link></li>
            <li>결제</li>
            <li><Link to={"/admin/product"}>제품 리스트</Link></li>
            <li><Link to={"/admin/addproduct"}>제품 추가</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminIndex