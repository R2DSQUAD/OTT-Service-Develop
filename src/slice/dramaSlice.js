import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initState={
  items:[]
}


const dramaSlice = createSlice({
  name: 'dramaItem',
  initialState: initState,
  reducers: {
    addItem: (state,action)=>{
      const num= state.items.findIndex(el=>{
        return el.id ===action.payload.id
      })
      if (num===-1){
        state.items.push(action.payload)
      }else{
        state.items[num].count += action.payload.count
      }
    },
    deleteItem: (state,action)=>{
      const num1= state.items.findIndex(el=>{
        return el.id===action.payload
      })
      if(num1!==-1){
        state.items.splice(num1,1)
      }
    }
  },
  extraReducers: (builder)=>{
      builder.addCase(dramaThunk.fulfilled,(state,action)=>{
        state.items=action.payload
        state.status= 'success'
      })
    }
  }
)
export const dramaThunk=createAsyncThunk('cart/dramaThunk',
  async ()=>{
    const res=await axios.get('http://localhost:3001/allItems')
    const data=res.data
    return data
  })
export const {addItem,deleteItem} =dramaSlice.actions
export default dramaSlice