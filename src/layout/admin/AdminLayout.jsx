import React from 'react'
import AdminLeft from './AdminLeft'
import { Outlet } from 'react-router-dom'
import AdminRight from './AdminRight'

const AdminLayout = () => {
  return (
    <>
    <div className="admin">
     
        <div className="admin-left">
        <AdminLeft />
        </div>
        <div className="admin-right">
        <AdminRight />
        <div className="admin-content">
          <Outlet/>
        </div>
        </div>
      
    </div>
  </>
  )
}

export default AdminLayout