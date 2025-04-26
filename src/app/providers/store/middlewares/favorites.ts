import { createListenerMiddleware } from '@reduxjs/toolkit'
import { favoritesModel } from 'entities/favorites'
import { favoritesAPI } from 'shared/api/favorites'

const favoritesMiddleware = createListenerMiddleware()

favoritesMiddleware.startListening({
  actionCreator: favoritesModel.actions.addedToFavorites,
  effect: async (action, api) => {
    const state: RootState = api.getState() as RootState
    const userId: string = state.user.info.id

    if (!userId) {
      return
    }

    favoritesAPI.save(action.payload, userId)
  },
})

favoritesMiddleware.startListening({
  actionCreator: favoritesModel.actions.favoriteItemRemoved,
  effect: async (action, api) => {
    const state: RootState = api.getState() as RootState
    const userId: string = state.user.info.id

    if (!userId) {
      return
    }

    favoritesAPI.remove(action.payload, userId)
  },
})

export const favoritesMiddlewares = [favoritesMiddleware.middleware]
