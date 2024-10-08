import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../slice/cartslice'
import allItemSlice from '../slice/allItemSlice'
import paymentSlice from '../slice/paymentSlice'
import authSlice from '../slice/authSlice'

const store = configureStore({
  reducer:{
    
    payment: paymentSlice.reducer,
    cart: cartslice.reducer,
    allitem: allItemSlice.reducer,
    auth: authSlice.reducer
  }
})

export default store