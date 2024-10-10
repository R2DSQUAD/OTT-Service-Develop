import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
const Loading = <div className='loading'>Loading...</div>
const AdminIndexPage = lazy(() => import('../pages/admin/AdminIndexPage'))
const AdminProductPage = lazy(() => import('../pages/admin/AdminProductPage'))
const AdminAddProductPage = lazy(() => import('../pages/admin/AdminAddProductPage'))
const AdminProductDetail = lazy(() => import('../pages/admin/AdminProductDetailPage'))
const AdminMember = lazy(()=> import('../pages/admin/AdminMemberPage'));
const AdminMemberDetail = lazy(() => import('../pages/admin/AdminMemberDetailPage'))
const Kakao = lazy(()=> import('../pages/admin/KakaoPage'));


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
        },
        {
          path: 'addproduct',
          element: <Suspense fallback={Loading}><AdminAddProductPage/></Suspense>
        },
        {
          path: 'adminmember',
          element: <Suspense fallback={Loading}><AdminMember/></Suspense>
        },
        {
          path: 'kakao',
          element: <Suspense fallback={Loading}><Kakao/></Suspense>
        },
        {
          path: 'product/detail/:id', // set/1 -> id가 1인 상세정보를 보여라~
          element: <Suspense fallback={Loading}><AdminProductDetail /></Suspense>
        },
        {
          path: 'adminmember/detail/:id',
          element: <Suspense fallback={Loading}><AdminMemberDetail/></Suspense>
        },
        
        ]
      )
}

export default toAdminRouter