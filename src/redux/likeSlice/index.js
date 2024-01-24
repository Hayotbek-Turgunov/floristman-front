import { createSlice } from '@reduxjs/toolkit'

export const likeSlice = createSlice({
  name: 'like',
  initialState: {},
  reducers: {
    handleLike: (state, action) => {
      if (state[action.payload.id]) {
        delete state[action.payload.id]
      } else {
        state[action.payload.id] = action.payload
      }
    }
  }
})


export const { handleLike } = likeSlice.actions

export default likeSlice.reducer