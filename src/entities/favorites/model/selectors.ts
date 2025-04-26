import { createSelector } from '@reduxjs/toolkit'

// sort favorites from new to old
const favorites = createSelector(
  (state: RootState) => state.favorites.items,
  items => [...items].reverse()
)

export const favoritesIds = createSelector(favorites, items =>
  items.map(i => i.id)
)

export const isFavorite = (id: number) =>
  createSelector(
    (state: RootState) => state.favorites.items,
    items => !!items.find(i => i.id === id)
  )

export const isLoading = (state: RootState) =>
  state.favorites.isLoading
