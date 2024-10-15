import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initstate = {
  items: [],
  status: null,
};



const paymentSlice = createSlice({
  name: "payment",
  initialState: initstate,
  reducers: {
    addPayment: (state, action) => {
      const num = state.items.findIndex((el) => {
        return el.id === action.payload.id;
      });

      if (num === -1) {
        state.items.splice(0,1);
        state.items.push(action.payload);
      } else {
        state.items[num].count += action.payload.count;
      }
    },
    clearPayment: (state, action) => {
      state.items = initstate.items
      state.status = initstate.status
    }
  
  },
  extraReducers: (builder)=>{
    builder.addCase(paymentListThunk.fulfilled,(state,action)=>{
      state.items=action.payload
      state.status= 'success'
    })
  }
}
)
export const paymentListThunk=createAsyncThunk('payment/paymentListThunk',
async (_, {getState})=>{
  const signInUser = getState().auth.signInUser; //redux getState로 값 가져오기
  const res = await axios.get(`http://localhost:3001/payments?userEmail=${signInUser[0].userEmail}`);
  const data=res.data
  
  return data
});

export const { addPayment, clearPayment } = paymentSlice.actions
export default paymentSlice;
