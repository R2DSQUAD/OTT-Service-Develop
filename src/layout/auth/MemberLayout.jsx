import React from 'react'
import MemberFooter from '../../components/auth/member/MemberFooter'
import MemberPage from '../../pages/auth/MemberPage'
import MemberHeader from '../../components/auth/member/MemberHeader'
import { Outlet } from 'react-router-dom'


const MemberLayout = () => {
  return (
    <>
     <MemberHeader/>
      <MemberPage/>
     <MemberFooter/>
    </>
  )
}

export default MemberLayout