import { createSelector } from '@reduxjs/toolkit'

// sort search history from new to old
export const history = createSelector(
  (state: RootState) => state.history.items,
  items => [...items].reverse()
)

export const isLoading = (state: RootState) => state.history.isLoading
