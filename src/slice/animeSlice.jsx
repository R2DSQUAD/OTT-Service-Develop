import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const initState = {
  animeData: [],
  recent: {
    userEmail: '',
    itemIdArr: []
  }
}

const animeSlice = createSlice({
  name: 'anime',
  initialState: initState,
  reducers: {
    addRecentFn: (state, action) => {
      //배열안에 이미 있는지 판단 -> 없으면 추가
      const isIn = state.recent.itemIdArr.includes(action.payload) 
      if (!isIn) {
        if (state.recent.itemIdArr.length === 5) {
          state.recent.itemIdArr.splice(0,1)
        }
        state.recent.itemIdArr.push(action.payload)
      } 
      //-----------------------
    },
    deleteRecentFn: (state, action) => {
      state.recent.itemIdArr = []
    }
   
  },
  extraReducers: (builder) => {
    builder.addCase(animeDataFn.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(animeDataFn.fulfilled, (state, action) => {
      state.animeData = action.payload
      state.status = 'complete'
    })
    builder.addCase(animeDataFn.rejected, (state, action) => {
      state.status = 'fail!'
    })
  }
})

export const animeDataFn = createAsyncThunk('anime/animeDataFn',
  async () => {
    try {
      const res = await axios.get('http://localhost:3001/allItems?type=애니메이션')
      const items = res.data
      return items

    } catch(err) {
      alert(err)
      return
    }
  }

)

export const {addRecentFn, deleteRecentFn} = animeSlice.actions
export default animeSlice