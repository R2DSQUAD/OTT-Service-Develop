import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import toAdminRouter from './toAdminRouter';

const Loading = <div className='loading'>Loading...</div>
const DefaultLayout = lazy(()=> import('../layout/common/DefaultLayout'));
const MainIndexPage = lazy(()=> import('../pages/main/MainIndexPage'));
const WebtoonIndexPage = lazy(()=> import('../pages/webtoon/WebtoonIndexPage'));
const DramaIndexPage = lazy(()=> import('../pages/drama/DramaPage'));
const Cart = lazy(()=> import('../components/cart/CartList'));
const AnimePage = lazy(() => import("../pages/anime/AnimePage"));
const SignInLayout = lazy(()=> import('../layout/auth/SignInLayout'))
const SignUpLayout = lazy(() => import('../layout/auth/SignUpLayout'))
const MovieIndex = lazy(()=> import('../pages/movie/MovieIndexPage'));
const AdminLayout = lazy(()=> import('../layout/admin/AdminLayout'));

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
        element: <Suspense fallback = {Loading}><DramaIndexPage/></Suspense>
      },
      ,{
        path: 'cart',
        element: <Suspense fallback = {Loading}><Cart/></Suspense>
      },
      {
        path: "anime",
        element: <Suspense fallback={Loading}><AnimePage /></Suspense>,
      },{
        path: 'movie',
        element: <Suspense fallback = {Loading}><MovieIndex/></Suspense>
      }

    ],
  },
  {
    path: '/signIn',
    element: <Suspense fallback = {Loading}><SignInLayout/></Suspense>
  },
  {
    path: '/signUp',
    element:  <Suspense fallback = {Loading}><SignUpLayout/></Suspense>
  },
  
  {
    path: '/admin',
    element: <Suspense fallback = {Loading}><AdminLayout/></Suspense>,
    children:toAdminRouter()
    
  }
])

export default root