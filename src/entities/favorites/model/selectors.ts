import { createSelector } from '@reduxjs/toolkit'

// sort favorites from new to old
export const favorites = createSelector(
  (state: RootState) => state.favorites.items,
  items => [...items].reverse()
)

export const isLoading = (state: RootState) =>
  state.favorites.isLoading
