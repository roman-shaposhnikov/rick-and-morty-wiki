import { createSlice, SerializedError } from '@reduxjs/toolkit'

import { init, signin, signout, signup } from './operations'

interface CurrentUser {
  type: 'guest' | 'user'
  info: {
    id: string
  }
  isAuthenticating: boolean
  error: SerializedError | null
}

const initialState: CurrentUser = {
  type: 'guest',
  info: {
    id: '',
  },
  isAuthenticating: false,
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
        state.isAuthenticating = false
      })
      .addCase(signin.pending, state => {
        state.isAuthenticating = true
      })
      .addCase(signin.rejected, (state, action) => {
        state.error = action.error
        state.isAuthenticating = false
      })

      .addCase(signup.fulfilled, (state, action) => {
        state.type = 'user'
        state.info.id = action.payload.id
        state.isAuthenticating = false
      })
      .addCase(signup.pending, state => {
        state.isAuthenticating = true
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.error
        state.isAuthenticating = false
      })

      .addCase(signout.fulfilled, () => initialState)
      .addCase(signout.pending, state => {
        state.isAuthenticating = true
      })

      .addCase(init.fulfilled, (state, action) => {
        if (action.payload.isSignedIn) {
          state.type = 'user'
          state.info.id = action.payload.id
        }
      })
  },
})
