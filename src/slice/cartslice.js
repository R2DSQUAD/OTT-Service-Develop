import { createSlice } from '@reduxjs/toolkit'

const initstate={
  items:[]
}

const cartslice = createSlice({
  name: 'cart',
  initialState: initstate,
  reducers:{
    addCart: (state,action)=>{
      const num= state.items.findIndex(el=>{
        return el.id ===action.payload.id
      })
      // console.log(action.payload)
      if (num===-1){
        state.items.push(action.payload)
      }else{
        state.items[num].count += action.payload.count
      }
    },
    deleteCart: (state,action)=>{
      const num1= state.items.findIndex(el=>{
        return el.id===action.payload
      })
      // console.log(action.payload)
      if(num1!==-1){
        state.items.splice(num1,1)
      }
    }
  }
})




export const {addCart,deleteCart}=cartslice.actions
export default cartslice