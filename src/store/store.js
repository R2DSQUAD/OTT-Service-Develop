import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../slice/cartslice'
import dramaSlice from '../slice/dramaSlice'
import authSlice from '../slice/authSlice'
import paymentSlice from '../slice/paymentSlice'
import allItemSlice from '../slice/allItemSlice'

const store = configureStore({
  reducer:{
    payment: paymentSlice.reducer,
    cart: cartslice.reducer,
    drama: dramaSlice.reducer,
    auth: authSlice.reducer,
    allItem: allItemSlice.reducer
  }
})

export default store