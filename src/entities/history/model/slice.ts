import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryItem } from 'shared/api/history'

import { getHistory } from './operations'

interface State {
  items: HistoryItem[]
  isLoading: boolean
}

const initialState: State = {
  items: [],
  isLoading: false,
}

export const slice = createSlice({
  name: 'entities/history',
  initialState: initialState,
  reducers: {
    searchRequested(state, action: PayloadAction<HistoryItem>) {
      state.items.push(action.payload)
    },
    historyItemRemoved(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        i => i.timestamp !== action.payload
      )
    },
    userSignedOut() {
      return initialState
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHistory.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(getHistory.pending, state => {
        state.isLoading = true
      })
  },
})
