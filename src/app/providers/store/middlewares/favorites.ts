import { createListenerMiddleware } from '@reduxjs/toolkit'
import { favoritesModel } from 'entities/favorites'
import { userModel } from 'entities/user'
import { favoritesAPI } from 'shared/api/favorites'

import { AppStartListening } from './lib'

export const favoritesMiddleware = createListenerMiddleware()

export const startAppListening =
  favoritesMiddleware.startListening as AppStartListening

startAppListening({
  actionCreator: favoritesModel.actions.addedToFavorites,
  effect: async (action, api) => {
    const state = api.getState()
    const userId: string = state.user.info.id

    favoritesAPI.save(action.payload, userId)
  },
})

startAppListening({
  actionCreator: favoritesModel.actions.favoriteItemRemoved,
  effect: async (action, api) => {
    const state = api.getState()
    const userId: string = state.user.info.id

    favoritesAPI.remove(action.payload, userId)
  },
})

startAppListening({
  actionCreator: userModel.operations.signin.fulfilled,
  effect: async (_, api) => {
    api.dispatch(favoritesModel.operations.getFavorites())
  },
})
