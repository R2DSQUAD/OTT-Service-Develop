import React from 'react'
import { Link } from 'react-router-dom'

const AdminLeft = () => {
  return (
    <div className="admin-left">
    <div className="admin-left-con">
      <h1 className="admin-logo">
        <Link to={"/admin"}><img src="/images/common/logo.svg" alt="logo" /></Link>
      </h1>
      <div className="admin-gnb">
        <ul>
          <li>
            <Link to={"/"}>멤버</Link>
          </li>
          <li>
            <Link to={"/admin/cart"}>장바구니</Link>
          </li>
          <li>
            <Link to={"/"}>결제</Link>
          </li>
          <li>
            <Link to={"/admin/product"}>제품 리스트</Link>
          </li>
          <li>
            <Link to={"/admin/addproduct"}>제품 추가</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default AdminLeft