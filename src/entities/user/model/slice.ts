import { createSlice, SerializedError } from '@reduxjs/toolkit'

import { signin, signout } from './operations'

interface CurrentUser {
  type: 'guest' | 'user'
  info: {
    id: string
  }
  error: SerializedError | null
}

const initialState: CurrentUser = {
  type: 'guest',
  info: {
    id: '',
  },
  error: null,
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signin.fulfilled, (state, action) => {
        state.type = 'user'
        state.info.id = action.payload.id
      })
      .addCase(signin.rejected, (state, action) => {
        state.error = action.error
      })
      .addCase(signout.fulfilled, state => {
        state = initialState
      })
  },
})
