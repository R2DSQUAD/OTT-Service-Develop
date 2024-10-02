import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
const Loading = <div className='loading'>Loading...</div>
const AdminIndexPage = lazy(() => import('../pages/admin/AdminIndexPage'))
const AdminProductPage = lazy(() => import('../pages/admin/AdminProductPage'))


const toAdminRouter = () => {
  return (
    [   
        {
            path: '',  // '/admin'-> '/admin/index
            element: <Navigate replace to='index' />
        },
        {
            path: 'index',
            element: <Suspense fallback={Loading}><AdminIndexPage /></Suspense>
        },
        {
            path: 'product',
            element: <Suspense fallback={Loading}><AdminProductPage/></Suspense>
        }
    ]
  )
}

export default toAdminRouter