import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../slice/cartslice'
import dramaSlice from '../slice/dramaSlice'

const store = configureStore({
  reducer:{
    cart: cartslice.reducer,
    drama: dramaSlice.reducer
  }
})

export default store