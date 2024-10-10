import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const initState = {
  dbData: []
}

const animeSlice = createSlice({
  name: 'anime',
  initialState: initState,
  reducers: {
    animeListSelect: (state, action) => {
      state.dbData.filter(el => el.type === "애니메이션")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(dbDataFn.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(dbDataFn.fulfilled, (state, action) => {
      state.dbData = action.payload
      state.status = 'complete'
    })
    builder.addCase(dbDataFn.rejected, (state, action) => {
      state.status = 'fail!'
    })
  }
})

export const dbDataFn = createAsyncThunk('anime/dbDataFn',
  async () => {
    try {
      const res = await axios.get('http://localhost:3001/allItems/')
      const items = res.data
      return items

    } catch(err) {
      alert(err)
      return
    }
  }

)

export const {animeListSelect} = animeSlice.actions
export default animeSlice