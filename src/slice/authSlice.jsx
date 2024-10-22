import { createSlice } from '@reduxjs/toolkit'
import React, { useState } from 'react'

const initState = {
  signInUser: [],
  isSignIn: false,
  category: [
    {recent: []}
  ]
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    signInUserFn: (state, action) => {
      const num = state.signInUser.findIndex(el => {
        return el.userEmail === action.payload.userEmail
      })
      if (num === -1) {
        state.signInUser.push(action.payload)
      }
      state.isSignIn = true
    },
    replaceUserFn: (state, action) => {
      state.signInUser.splice(0,1, action.payload)
    },
    signOutFn: (state, action) => {
      state.signInUser.splice(0,1)
      state.isSignIn = false
    },
    categoryDeleteFn: (state, action) => {
      const num = state.category[0].recent.findIndex(el => el === action.payload)
      state.category[0].recent.splice(num, 1)
    }
  }
})

export const {signInUserFn, signOutFn, replaceUserFn, categoryDeleteFn} = authSlice.actions
export default authSlice