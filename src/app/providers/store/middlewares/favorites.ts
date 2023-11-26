import { createListenerMiddleware } from '@reduxjs/toolkit'
import { favoritesModel } from 'entities/favorites'
import { userModel } from 'entities/user'
import { favoritesAPI } from 'shared/api/favorites'

export const favoritesMiddleware = createListenerMiddleware()

favoritesMiddleware.startListening({
  actionCreator: favoritesModel.actions.addedToFavorites,
  effect: async (action, api) => {
    const state = api.getState() as RootState
    const userId: string = state.user.info.id

    favoritesAPI.save(action.payload, userId)
  },
})

favoritesMiddleware.startListening({
  actionCreator: favoritesModel.actions.favoriteItemRemoved,
  effect: async (action, api) => {
    const state = api.getState() as RootState
    const userId: string = state.user.info.id

    favoritesAPI.remove(action.payload, userId)
  },
})

favoritesMiddleware.startListening({
  actionCreator: userModel.operations.signin.fulfilled,
  effect: async (_, api) => {
    const dispatch = api.dispatch as AppDispatch

    dispatch(favoritesModel.operations.getFavorites())
  },
})

favoritesMiddleware.startListening({
  actionCreator: userModel.operations.signout.fulfilled,
  effect: async (_, api) => {
    api.dispatch(favoritesModel.actions.userSignedOut())
  },
})
