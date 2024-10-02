import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';

const Loading = <div className='loading'>Loading...</div>
const DefaultLayout = lazy(()=> import('../layout/common/DefaultLayout'));
const MainIndexPage = lazy(()=> import('../pages/main/MainIndex'));
const WebtoonIndexPage = lazy(()=> import('../pages/webtoon/WebtoonIndexPage'));

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
      }
    ]
  }
])

export default root