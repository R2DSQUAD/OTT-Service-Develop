import React from 'react'
import SignInHeader from '../../components/auth/signIn/SignInHeader'
import SignInFooter from '../../components/auth/signIn/SignInFooter'
import SignInIndex from '../../components/auth/signIn/SignInIndex'

const SignInLayout = () => {
  return (
    <>
      <SignInHeader/>
        <SignInIndex/>
      <SignInFooter/>
    </>
  )
}

export default SignInLayout