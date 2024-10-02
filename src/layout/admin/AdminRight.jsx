import React from 'react'
import { Link } from 'react-router-dom'

const AdminRight = () => {
  return (
    <div className="admin-rigth">
    <div className="admin-right-con">
      <div className="admin-gnb">
        <ul>
          <li>
            <Link to={"/"}>로그아웃</Link>
          </li>
          <li>
            <Link to={"/"}>님</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default AdminRight