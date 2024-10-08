import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../slice/cartslice'
import itemSlice from '../slice/itemSlice'
import authSlice from '../slice/authSlice'
import paymentSlice from '../slice/paymentSlice'
import allItemSlice from '../slice/allItemSlice'

const store = configureStore({
  reducer:{
    payment: paymentSlice.reducer,
    cart: cartslice.reducer,
    item: itemSlice.reducer,
    auth: authSlice.reducer,
    allItem: allItemSlice.reducer
  }
})

export default store