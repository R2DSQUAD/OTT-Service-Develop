import { createSlice } from "@reduxjs/toolkit";

const initstate = {
  items: [],
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
    increCount: (state, action) => {
      const num = state.items.findIndex((el) => {
        return el.id === action.payload;
      });
      state.items[num].count += 1;
    },
    decreCount: (state, action) => {
      const num = state.items.findIndex((el) => {
        return el.id === action.payload;
      });
      if (state.items[num].count <= 1) {
        state.items[num].count = 1;
      } else {
        state.items[num].count -= 1;
      }
    },
  },
});

export const { addPayment, increCount, decreCount } = paymentSlice.actions
export default paymentSlice;
