import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';

const Loading = <div className='loading'>Loading...</div>
const DefaultLayout = lazy(()=> import('../layout/common/DefaultLayout'));
const MainIndex = lazy(()=> import('../components/main/MainIndex'));

const root = createBrowserRouter([
  {
    path: '/',
    element:<Suspense fallback= {Loading}><DefaultLayout/></Suspense>,
    children: [
      {
        path: '',
        element: <Suspense fallback = {Loading}><MainIndex/></Suspense>
      }
    ]
  }
])

export default root