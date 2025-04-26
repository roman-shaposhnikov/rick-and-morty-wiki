import { Action, AnyAction, Middleware } from '@reduxjs/toolkit'
import { favoritesModel } from 'entities/favorites'
import { historyModel } from 'entities/history'

const historyActions = historyModel.actions
const favoritesActions = favoritesModel.actions

const authProtected = [
  historyActions.searchRequested,
  historyActions.historyItemRemoved,

  favoritesActions.addedToFavorites,
  favoritesActions.favoriteItemRemoved,
].map((action: Action) => action.type)

const authProtect: Middleware<NonNullable<never>, RootState> =
  api => next => (action: AnyAction) => {
    const isActionProtected = authProtected.includes(action.type)
    const isUserSignedIn = !!api.getState().user.info.id

    return isActionProtected && !isUserSignedIn
      ? undefined
      : next(action)
  }

export const protectMiddlewares = [authProtect]
