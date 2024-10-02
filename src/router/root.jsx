import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';

const Loading = <div className='loading'>Loading...</div>
const DefaultLayout = lazy(()=> import('../layout/common/DefaultLayout'));
const MainIndexPage = lazy(()=> import('../pages/main/MainIndex'));
const WebtoonIndexPage = lazy(()=> import('../pages/webtoon/WebtoonIndexPage'));
const Drama = lazy(()=> import('../components/drama/Drama'));
const Cart = lazy(()=> import('../components/cart/CartList'));
const AnimePage = lazy(() => import("../pages/anime/AnimePage"));
const SignInLayout = lazy(()=> import('../layout/auth/SignInLayout'))
const SignUpLayout = lazy(() => import('../layout/auth/SignUpLayout'))

const root = createBrowserRouter([
  {
    path: '/',
    element:<Suspense fallback= {Loading}><DefaultLayout/></Suspense>,
    children: [
      {
        path: '',
        element: <Suspense fallback = {Loading}><MainIndexPage/></Suspense>
      },
      {
        path: 'webtoon',
        element: <Suspense fallback = {Loading}><WebtoonIndexPage/></Suspense>
      },{
        path: 'drama',
        element: <Suspense fallback = {Loading}><Drama/></Suspense>
      },
      ,{
        path: 'cart',
        element: <Suspense fallback = {Loading}><Cart/></Suspense>
      },
      {
        path: "anime",
        element: <Suspense fallback={Loading}><AnimePage /></Suspense>,
      },
    ],
  },
  {
    path: '/signIn',
    element: <Suspense fallback = {Loading}><SignInLayout/></Suspense>
  },
  {
    path: '/signUp',
    element:  <Suspense fallback = {Loading}><SignUpLayout/></Suspense>
  }
])

export default root