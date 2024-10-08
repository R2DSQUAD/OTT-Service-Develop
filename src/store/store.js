import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../slice/cartslice'
import dramaSlice from '../slice/dramaSlice'
import authSlice from '../slice/authSlice'

const store = configureStore({
  reducer:{
    cart: cartslice.reducer,
    drama: dramaSlice.reducer,
    auth: authSlice.reducer
  }
})

export default store