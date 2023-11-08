import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'shared/api/auth'

import { signin, signout } from './operations'

interface CurrentUser {
  type: 'guest' | 'user'
  info: {
    id: string
  }
}

const initialState: CurrentUser = {
  type: 'guest',
  info: {
    id: '',
  },
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signedIn(state, action: PayloadAction<User>) {
      state.type = 'user'
      state.info.id = action.payload.id
    },
    signedOut(state) {
      state.type = 'guest'
      state.info.id = ''
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signin.fulfilled, (state, action) => {
        state.type = 'user'
        state.info.id = action.payload.id
      })
      .addCase(signout.fulfilled, state => {
        state.type = 'guest'
        state.info.id = ''
      })
  },
})
