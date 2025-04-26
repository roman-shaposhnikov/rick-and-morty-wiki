import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoritesItem } from 'shared/api/favorites'
import { userSignedOut } from 'shared/lib/redux'

import { getFavorites } from './operations'

interface State {
  items: FavoritesItem[]
  isLoading: boolean
}

const initialState: State = {
  items: [],
  isLoading: false,
}

export const slice = createSlice({
  name: 'entities/favorites',
  initialState,
  reducers: {
    addedToFavorites(state, action: PayloadAction<FavoritesItem>) {
      state.items.push(action.payload)
    },
    favoriteItemRemoved(state, action: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userSignedOut, () => initialState)
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(getFavorites.pending, state => {
        state.isLoading = true
      })
  },
})
