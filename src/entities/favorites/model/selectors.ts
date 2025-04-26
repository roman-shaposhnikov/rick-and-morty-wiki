import { createSelector } from '@reduxjs/toolkit'

export const favoritesIds = (state: RootState) =>
  state.favorites.items.map(i => i.id)

export const isFavorite = (id: number) =>
  createSelector(
    (state: RootState) => state.favorites.items,
    items => !!items.find(i => i.id === id)
  )

export const isLoading = (state: RootState) =>
  state.favorites.isLoading
