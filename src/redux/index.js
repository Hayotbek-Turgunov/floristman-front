import { configureStore } from '@reduxjs/toolkit'
import like from './likeSlice/index'


const store = configureStore({
  reducer: {
    like,
  }
})

export default store